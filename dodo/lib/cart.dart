import 'package:flutter/material.dart';
import 'main.dart';
import 'values.dart';

class CartWidget extends StatelessWidget {
  var setCurrentPage;
  var removeFromCart;
  List<CartItem> items;

  CartWidget(this.setCurrentPage, this.removeFromCart, this.items);

  @override
  Widget build(BuildContext context) {
    if (items.length == 0) {
      return NoItems(setCurrentPage);
    } else {
      return ListItems(items, removeFromCart);
    }
  }
}

class ListItems extends StatelessWidget {
  List<CartItem> items;
  var removeFromCart;
  int price = 0;

  ListItems(this.items, this.removeFromCart) {
    items.forEach((i) => price += int.parse(menu[i.id]!['price'].toString()));
  }

  String generateDesc(i) {
    String otv = '';

    switch (items[i].size) {
      case 0:
        otv += 'Маленькая 25 см';
        break;
      case 1:
        otv += 'Средняя 30 см';
        break;
      case 2:
        otv += 'Большая 35 см';
    }

    switch (items[i].type) {
      case 0:
        otv += ' традиционное тесто';
        break;
      case 1:
        otv += ' тонкое тесто';
    }

    return otv;
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        Padding(
          padding: EdgeInsets.only(top: 20, left: 20),
          child: Text(
            '${this.items.length} товаров на ${this.price} ₽',
            style: TextStyle(fontWeight: FontWeight.w600, fontSize: 20),
          ),
        ),
        ListView.builder(
          scrollDirection: Axis.vertical,
          shrinkWrap: true,
          physics: ClampingScrollPhysics(),
          itemCount: items.length,
          itemBuilder: (BuildContext context, int i) {
            return Container(
              margin: EdgeInsets.symmetric(vertical: 5),
              padding: EdgeInsets.all(10),
              color: Colors.white,
              child: Column(
                children: [
                  Container(
                    height: 110,
                    child: Row(
                      children: [
                        Image.asset('assets/pizza/${items[i].id}.png'),
                        Padding(
                          padding: EdgeInsets.only(top: 20, left: 12),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                menu[items[i].id]!['name'].toString(),
                                style: TextStyle(
                                    fontWeight: FontWeight.w400, fontSize: 16),
                              ),
                              Padding(
                                padding: EdgeInsets.only(top: 3),
                                child: Text(
                                  generateDesc(i),
                                  style: TextStyle(
                                      color: Colors.black54, fontSize: 14),
                                ),
                              )
                            ],
                          ),
                        )
                      ],
                    ),
                  ),
                  Divider(
                    thickness: 1,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(menu[items[i].id]!['price'].toString() + ' ₽',
                          style: TextStyle(
                              fontWeight: FontWeight.w400, fontSize: 16)),
                      ActionChip(
                        label: Text(
                          'Удалить',
                          style: TextStyle(
                              color: Color.fromRGBO(69, 75, 84, 1),
                              fontWeight: FontWeight.w500),
                        ),
                        backgroundColor: Color.fromRGBO(243, 243, 247, 1),
                        onPressed: () => removeFromCart(i),
                      )
                    ],
                  ),
                ],
              ),
            );
          },
        )
      ],
    );
  }
}

class NoItems extends StatelessWidget {
  var setCurrentPage;

  NoItems(this.setCurrentPage);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Center(
          child: Container(
        height: 330,
        child: Column(
          children: [
            Container(
              padding: EdgeInsets.symmetric(horizontal: 70),
              child: Image.asset('assets/no_cart.png', fit: BoxFit.contain),
            ),
            Padding(
              padding: EdgeInsets.only(top: 15),
              child: Text(
                'Ой, пусто!',
                style: TextStyle(fontWeight: FontWeight.w600, fontSize: 20),
              ),
            ),
            Padding(
              padding: EdgeInsets.only(top: 5),
              child: Text(
                'Ваша корзина пуста, добавьте понравившийся товар из меню.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 17),
              ),
            ),
            Padding(
              padding: EdgeInsets.only(top: 15),
              child: ElevatedButton(
                  onPressed: () => setCurrentPage(0),
                  child: Padding(
                    padding: EdgeInsets.symmetric(vertical: 10, horizontal: 10),
                    child: Text(
                      'ПЕРЕЙТИ В МЕНЮ',
                      style: TextStyle(fontSize: 16),
                    ),
                  ),
                  style: ButtonStyle(
                      backgroundColor: MaterialStateProperty.all<Color>(
                          Colors.deepOrangeAccent),
                      shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                          RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(30))))),
            )
          ],
        ),
      )),
    );
  }
}
