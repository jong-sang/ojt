package main

import (
	"fmt"
	. "fmt"
	"time"
)

const console string = "\n엔터를 입력하면 메뉴 화면으로 돌아갑니다.\n"

type item struct {
	name   string
	price  int
	amount int
}

type buyer struct {
	point          int
	shoppingBucket map[string]int
}

type delivery struct {
	status      string
	onedelivery map[string]int
}

func newDelivery() delivery {
	d := delivery{}
	d.onedelivery = map[string]int{}
	return d
}

func newBuyer() *buyer {
	d := buyer{}
	d.point = 1000000
	d.shoppingBucket = map[string]int{}
	return &d
}

func excessAmount(itm []item, byr *buyer) (canbuy bool) {
	for index, val := range byr.shoppingBucket {
		for i := 0; i < len(itm); i++ {
			if itm[i].name == index {
				if itm[i].amount < val {
					Println("%s, %d개 초과", itm[i].name, val-itm[i].amount)
					return false
				}
			}
		}
	}
	return true
}

func requiredPoint(itm []item, byr *buyer) (canbuy bool) {
	bucketpoint := 0
	for index, val := range byr.shoppingBucket {
		for i := 0; i < len(itm); i++ {
			if itm[i].name == index {
				bucketpoint += itm[i].price * val
			}
		}
	}
	Println("필요 마일리지 :", bucketpoint)
	Println("보유 마일리지 :", byr.point)
	Println()

	if byr.point < bucketpoint {
		Printf("마일리지가 %d점 부족합니다.", bucketpoint-byr.point)
		return false
	}
	return true
}

func emptyBucket(byr *buyer) {
	if len(byr.shoppingBucket) == 0 {
		Println("장바구니가 비었습니다.")
	} else {
		for index, val := range byr.shoppingBucket {
			Printf("%s, 수량 : %d\n", index, val)
		}
	}
}

func buying(itm []item, byr *buyer, itmchoice int, num *int, d chan bool, temp map[string]int) {
	inputamount := 0
	defer func() {
		if r := recover(); r != nil {
			Println(r, "\n")
		}
	}()
	Print("수량을 입력하세요 :")
	Scanln(&inputamount)
	Println()
	if inputamount <= 0 {
		panic("올바른 수량을 입력하세요.")
	}
	if byr.point < itm[itmchoice-1].price*inputamount || itm[itmchoice-1].amount < inputamount {
		panic("주문이 불가합니다")
	} else {
		for {
			buy := 0
			Println("1. 바로 주문\n2. 장바구니 담기")
			Print("실행할 기능을 입력하시오. :")
			Scanln(&buy)
			Println()

			if buy == 1 {
				if *num < 5 {
					itm[itmchoice-1].amount -= inputamount
					byr.point -= itm[itmchoice-1].price * inputamount
					temp[itm[itmchoice-1].name] = inputamount // 임시 저장

					d <- true
					Println("상품이 주문 접수 되었습니다.")
					*num++
					break
				} else {
					Println("배송 한도를 초과했습니다. 배송이 완료되면 주문하세요.")
					break
				}
			} else if buy == 2 { // 장바구니에 물건 담기
				checkbucket := false
				for itms := range byr.shoppingBucket {
					if itms == itm[itmchoice-1].name {
						checkbucket = true
					}
				}

				if checkbucket == true { // 장바구니에 중복된 물품이 있을때
					temp := byr.shoppingBucket[itm[itmchoice-1].name] + inputamount
					if temp > itm[itmchoice-1].amount {
						Println("물품의 잔여 수량을 초과했습니다.")
						break
					} else {
						byr.shoppingBucket[itm[itmchoice-1].name] += inputamount // 수량만 더팜
					}
				} else { // 장바구니에 중복 물품이 없을 때
					byr.shoppingBucket[itm[itmchoice-1].name] = inputamount // 새로 품목을 추가
				}
				Println("상품이 장바구니에 추가되었습니다.")
				break // buying for문을 탈출함

			} else {
				Println("잘못된 입력입니다. 다시 입력해주세요.\n")
			}
		}
	}
}

func bucketBuying(itm []item, byr *buyer, num *int, d chan bool, temp map[string]int) {
	defer func() {
		if r := recover(); r != nil {
			Println("\n", r, "\n")
		}
	}()

	if len(byr.shoppingBucket) == 0 {
		panic("주문 가능한 목록이 없습니다.")
	} else {
		if *num < 5 {
			for index, val := range byr.shoppingBucket {
				temp[index] = val
				for i := range itm {
					if itm[i].name == index {
						itm[i].amount -= val
						byr.point -= itm[i].price * val
					}
				}
			}
			d <- true
			byr.shoppingBucket = map[string]int{}
			Println("주문이 접수 되었습니다.")
			*num++
		} else {
			Println("배송한도 초과. 완료되면 다시 주문하세요")
		}
	}
}

func deliveryStatus(d chan bool, i int, deliverylist []delivery, num *int, temp *map[string]int) {
	for {
		if <-d {
			for index, val := range *temp {
				deliverylist[i].onedelivery[index] = val
			}
			*temp = map[string]int{}

			deliverylist[i].status = "주문접수"
			time.Sleep(time.Second * 10)

			deliverylist[i].status = "배송중"
			time.Sleep(time.Second * 30)

			deliverylist[i].status = "배송완료"
			time.Sleep(time.Second * 10)

			deliverylist[i].status = ""
			*num--
			deliverylist[i].onedelivery = map[string]int{}
		}
	}
}

func main() {
	numbuy := 0
	items := make([]item, 5)
	buyer := newBuyer()
	deliverystart := make(chan bool)     // 주문 시작 신호 송/수신 채널
	deliverylist := make([]delivery, 5)  // 배송 중인 상품 목록
	tempdelivery := make(map[string]int) // 배달 물품 임시저장소

	// -------------------------------------------- 판매 목록
	items[0] = item{"텀블러", 10000, 30}
	items[1] = item{"롱패딩", 500000, 20}
	items[2] = item{"투미 백팩", 400000, 20}
	items[3] = item{"나이키 운동화", 150000, 50}
	items[4] = item{"빼빼로", 1200, 500}
	// --------------------------------------------

	for i := 0; i < 5; i++ { // 배송 상품 객체 5개
		deliverylist[i] = newDelivery()
	}

	for i := 0; i < 5; i++ { // 고루틴 5개 선언
		time.Sleep(time.Millisecond) // 순서대로 선언 될 수 있도록 딜레이 적용
		go deliveryStatus(deliverystart, i, deliverylist, &numbuy, &tempdelivery)
	}

	for {
		menu := 0

		Println("1. 구매")
		Println("2. 잔여 수량 확인")
		Println("3. 잔여 마일리지 확인")
		Println("4. 배송 상태 확인")
		Println("5. 장바구니 확인")
		Println("6. 프로그램 종료")
		Print("실행할 기능을 입력하세요 : ")

		Scanln(&menu)
		Println()

		switch menu {
		case 1: // 구매
			for {
				itemchoice := 0
				for i := 0; i < 5; i++ {
					Printf("물품%d: %s, 가격: %d,잔여 수량 : %d\n\n", i+1, items[i].name, items[i].price, items[i].amount)
				}
				Print("구매할 물품을 선택하세요 : ")
				Scanln(&itemchoice)
				Println()
				switch itemchoice {
				case 1:
					buying(items, buyer, itemchoice, &numbuy, deliverystart, tempdelivery)
					break
				case 2:
					buying(items, buyer, itemchoice, &numbuy, deliverystart, tempdelivery)
					break
				case 3:
					buying(items, buyer, itemchoice, &numbuy, deliverystart, tempdelivery)
					break
				case 4:
					buying(items, buyer, itemchoice, &numbuy, deliverystart, tempdelivery)
					break
				case 5:
					buying(items, buyer, itemchoice, &numbuy, deliverystart, tempdelivery)
					break
				default:
					Println("잘못된 입력입니다. 다시 입력해주세요. \n")
				}
				break // if, else if 로 구성된 코드를 switch로 바꾸니 buying 실행 후 다시 맨 위로 올라가서 무한 반복을 돔.
				// 그래서 스위치문 이후에 break를 추가하니 정상 동작함
				// case 안의 break는 스위치문 탈출을 의미함 -> for문을 탈출못함
			}
			fmt.Print("엔터를 입력하면 메뉴 화면으로 돌아갑니다.")
			fmt.Scanln()
		case 2: // 잔여 수량 확인
			for i := 0; i < 5; i++ {
				Printf("%s %d %d\n\n", items[i].name, items[i].price, items[i].amount)
			}
			Println(console)
			Scanln()
		case 3: // 잔여 마일리지 확인
			Printf("현재 잔여 마일리지는 %d점 입니다\n", buyer.point)
			Println(console)
			Scanln()
		case 4: // 배송 상태 확인
			total := 0
			for i := 0; i < 5; i++ {
				total += len(deliverylist[i].onedelivery)
			}
			if total == 0 {
				Println("배송중인 상품이 없습니다.")
			} else {
				for i := 0; i < len(deliverylist); i++ {
					if len(deliverylist[i].onedelivery) != 0 {
						for index, val := range deliverylist[i].onedelivery {
							Printf("%s %d개\n", index, val)
						}
						Printf("배송상황: %s\n", deliverylist[i].status)
					}
				}
			}
			Println(console)
			Scanln()
		case 5: //장바구니 확인
			bucketmenu := 0
			for {
				emptyBucket(buyer) // 장바구니 비었는지 확인 후 안비었으면 장바구니 내역 출력

				canbuy := requiredPoint(items, buyer)
				canbuy = excessAmount(items, buyer)
				Println("1. 장바구니 상품 주문하기")
				Println("2. 장바구니 초기화")
				Println("3. 메뉴로 돌아가기")
				Print("실행할 기능을 입력하시오 :")
				Scanln(&bucketmenu)
				Println()

				if bucketmenu == 1 { // 장바구니 상품 바로 주문하는 기능
					if canbuy { // 주문
						bucketBuying(items, buyer, &numbuy, deliverystart, tempdelivery)
						break
					} else {
						Println("구매할 수 없습니다")
						break
					}
				} else if bucketmenu == 2 {
					buyer.shoppingBucket = map[string]int{} // 장바구니 초기화
					Println("장바구니가 초기화 되었습니다")
					break
				} else if bucketmenu == 3 {
					Println()
					break
				} else {
					Println("잘못된 입력입니다. 다시 입력해주세요.")
				}

			}
		case 6: // 프로그램 종료
			Print("프로그램을 종료합니다.\n\n")
			return
		default: // 예외처리
			Print("잘못된 입력입니다. 다시 입력해주세요\n\n")
			Scanln()
		}

	}
}
