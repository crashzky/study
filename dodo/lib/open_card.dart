import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'values.dart';

class OpenCard extends StatefulWidget {
  int id;
  var addToCart;

  OpenCard(this.id, this.addToCart);

  @override
  _OpenCardState createState() => _OpenCardState(id, addToCart);
}

class _OpenCardState extends State<OpenCard> {
  var addToCart;
  int id;
  int curentSize = 1;
  int currentType = 0;

  _OpenCardState(this.id, this.addToCart);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
            color: Colors.white,
            child: ListView(
              padding: EdgeInsets.only(top: 50),
              children: [
                Align(
                    alignment: Alignment.topLeft,
                    child: Padding(
                      padding: EdgeInsets.only(left: 20),
                      child: FloatingActionButton(
                        backgroundColor: Colors.white,
                        foregroundColor: Colors.black,
                        mini: true,
                        onPressed: () => Navigator.pop(context),
                        child: Icon(Icons.arrow_back_ios_new_rounded),
                      ),
                    )),
                Container(
                  padding: EdgeInsets.fromLTRB(30, 0, 30, 10),
                  child:
                      Image.asset('assets/pizza/$id.png', fit: BoxFit.contain),
                ),
                Padding(
                    padding: EdgeInsets.symmetric(horizontal: 17),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          menu[id]!['name'].toString(),
                          style: TextStyle(
                              fontSize: 25,
                              color: Colors.black,
                              fontWeight: FontWeight.w600),
                        ),
                        Padding(
                          padding: EdgeInsets.only(top: 9),
                          child: Text(
                            menu[id]!['description'].toString(),
                            style:
                                TextStyle(color: Colors.black45, fontSize: 15),
                          ),
                        ),
                        Container(
                          alignment: Alignment.center,
                          padding: EdgeInsets.only(top: 15),
                          child: CupertinoSlidingSegmentedControl(
                            onValueChanged: (i) => setState(
                                () => curentSize = int.parse(i.toString())),
                            groupValue: curentSize,
                            children: {
                              0: CupertinoText.size('Маленькая'),
                              1: CupertinoText.size('Средняя'),
                              2: CupertinoText.size('Большая')
                            },
                          ),
                        ),
                        Container(
                          alignment: Alignment.center,
                          padding: EdgeInsets.only(top: 15),
                          child: CupertinoSlidingSegmentedControl(
                            onValueChanged: (i) => setState(
                                () => currentType = int.parse(i.toString())),
                            groupValue: currentType,
                            children: {
                              0: CupertinoText.type('Традиционное'),
                              1: CupertinoText.type('Тонкое')
                            },
                          ),
                        ),
                        Container(
                            alignment: Alignment.center,
                            padding: EdgeInsets.only(top: 20),
                            child: ElevatedButton(
                                onPressed: () {
                                  addToCart(id, curentSize, currentType);
                                  Navigator.pop(context);
                                },
                                child: Padding(
                                  padding: EdgeInsets.symmetric(
                                      vertical: 10, horizontal: 10),
                                  child: Text(
                                    'В КОРЗИНУ ЗА ${menu[id]!['price'].toString()} ₽',
                                    style: TextStyle(fontSize: 16),
                                  ),
                                ),
                                style: ButtonStyle(
                                    backgroundColor:
                                        MaterialStateProperty.all<Color>(
                                            Colors.deepOrangeAccent),
                                    shape: MaterialStateProperty.all<
                                            RoundedRectangleBorder>(
                                        RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(30))))))
                      ],
                    ))
              ],
            )));
  }
}

class CupertinoText extends StatelessWidget {
  String value;
  int? type;

  CupertinoText.size(this.value) {
    type = 0;
  }

  CupertinoText.type(this.value) {
    type = 1;
  }

  EdgeInsets switchType() {
    switch (type) {
      case 0:
        return EdgeInsets.symmetric(vertical: 10);
      case 1:
        return EdgeInsets.symmetric(vertical: 10, horizontal: 14);
      default:
        return EdgeInsets.symmetric(vertical: 10);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: switchType(),
        child: Text(
          value,
          style: TextStyle(fontSize: 17),
        ));
  }
}
