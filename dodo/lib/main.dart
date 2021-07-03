import 'package:flutter/material.dart';
import 'menu.dart';
import 'contacts.dart';
import 'profile.dart';
import 'cart.dart';

void main() => runApp(App());

class App extends StatefulWidget {
  @override
  _CartState createState() => _CartState();
}

class _CartState extends State<App> {
  List<CartItem> items = [];
  int currentPage = 0;

  void setCurrentPage(int page) {
    setState(() => currentPage = page);
  }

  void addToCart(int id, int size, int type) {
    setState(() => items.add(CartItem(id, size, type)));
  }

  void removeFromCart(int id) {
    setState(() {
      items.removeAt(id);
    });
  }

  Widget getBody() {
    switch (currentPage) {
      case 0:
        return MenuWidget(addToCart);
      case 1:
        return ProfileWidget();
      case 2:
        return ContactsWidget();
      case 3:
        return CartWidget(setCurrentPage, removeFromCart, items);
      default:
        return MenuWidget(addToCart);
    }
  }

  PreferredSizeWidget? getAppBar() {
    switch (currentPage) {
      case 1:
        return AppBar(
          title: Text(
            'Профиль',
            style: TextStyle(color: Colors.black),
          ),
          actions: [
            Padding(
              padding: EdgeInsets.only(right: 15),
              child: Row(
                textDirection: TextDirection.ltr,
                children: [
                  Text(
                    '0',
                    style: TextStyle(
                        color: Colors.black,
                        fontSize: 22,
                        fontWeight: FontWeight.w600),
                  ),
                  Icon(
                    Icons.attach_money_rounded,
                    color: Colors.black,
                    size: 30,
                  )
                ],
              ),
            )
          ],
          backgroundColor: Colors.white,
          shadowColor: Colors.transparent,
        );
      case 3:
        return AppBar(
          title: Text(
            'Корзина',
            style: TextStyle(color: Colors.black),
          ),
          backgroundColor: Colors.white,
        );
      default:
        return null;
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
          appBar: getAppBar(),
          body: getBody(),
          bottomNavigationBar: BottomNavigationBar(
            type: BottomNavigationBarType.fixed,
            currentIndex: currentPage,
            selectedItemColor: Colors.deepOrangeAccent,
            onTap: (value) {
              setCurrentPage(value);
            },
            backgroundColor: Colors.white,
            items: [
              BottomNavigationBarItem(
                label: 'Меню',
                icon: Icon(Icons.local_pizza_rounded),
              ),
              BottomNavigationBarItem(
                label: 'Профиль',
                icon: Icon(Icons.person),
              ),
              BottomNavigationBarItem(
                label: 'Контакты',
                icon: Icon(Icons.location_on),
              ),
              BottomNavigationBarItem(
                label: 'Корзина',
                icon: Icon(Icons.add_shopping_cart_outlined),
              ),
            ],
          ),
        ));
  }
}

class CartItem {
  int id;
  int size;
  int type;

  CartItem(this.id, this.size, this.type);
}
