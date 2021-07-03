import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'open_card.dart';
import 'values.dart';

class MenuWidget extends StatelessWidget {
  var addToCart;

  MenuWidget(this.addToCart);

  void openCard(BuildContext context, int id) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => OpenCard(id, addToCart)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 30),
      color: Colors.white,
      child: ListView(
        children: [
          Padding(
              padding: EdgeInsets.only(left: 15),
              child: Text(
                'Новое и популярное',
                style: TextStyle(fontWeight: FontWeight.w500, fontSize: 15),
              )),
          CarouselSlider(
              options: CarouselOptions(
                  height: 160, enableInfiniteScroll: false, initialPage: 0),
              items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) {
                return Builder(
                  builder: (BuildContext context) {
                    return Container(
                        margin: EdgeInsets.symmetric(vertical: 20),
                        width: 300,
                        decoration: BoxDecoration(boxShadow: [
                          BoxShadow(
                            color: Colors.grey.withOpacity(0.2),
                            spreadRadius: 3,
                            blurRadius: 9,
                            offset: Offset(0, 10), // changes position of shadow
                          )
                        ]),
                        child: ElevatedButton(
                          onPressed: () => openCard(context, i),
                          style: ButtonStyle(
                              shape: MaterialStateProperty.all<
                                      RoundedRectangleBorder>(
                                  RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(15))),
                              backgroundColor:
                                  MaterialStateProperty.all(Colors.white)),
                          child: Row(
                            children: [
                              Container(
                                width: 110,
                                child: Image.asset('assets/pizza/$i.png'),
                              ),
                              Padding(
                                padding: EdgeInsets.only(left: 17, top: 30),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      menu[i]!['name'].toString(),
                                      style: TextStyle(color: Colors.black),
                                    ),
                                    ActionChip(
                                      backgroundColor:
                                          Color.fromRGBO(255, 240, 230, 1),
                                      label: Text(
                                        menu[i]!['price'].toString() + ' ₽',
                                        style: TextStyle(
                                            color:
                                                Color.fromRGBO(220, 117, 44, 1),
                                            fontWeight: FontWeight.w500),
                                      ),
                                      onPressed: () {},
                                    )
                                  ],
                                ),
                              )
                            ],
                          ),
                        ));
                  },
                );
              }).toList()),
          ListView.separated(
            scrollDirection: Axis.vertical,
            shrinkWrap: true,
            physics: ClampingScrollPhysics(),
            separatorBuilder: (BuildContext context, int index) => Container(
              height: 10,
            ),
            itemCount: 10,
            itemBuilder: (BuildContext context, int i) {
              return ElevatedButton(
                  onPressed: () => openCard(context, i),
                  style: ButtonStyle(
                      backgroundColor: MaterialStateProperty.all(Colors.white),
                      shadowColor:
                          MaterialStateProperty.all(Colors.transparent)),
                  child: Row(
                    children: [
                      Container(
                        height: 120,
                        margin: EdgeInsets.only(right: 10),
                        child: Image.asset('assets/pizza/$i.png'),
                      ),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(menu[i]!['name'].toString(),
                                style: TextStyle(
                                    color: Colors.black,
                                    fontSize: 17,
                                    fontWeight: FontWeight.normal)),
                            Padding(
                              padding: EdgeInsets.only(top: 5),
                              child: Text(menu[i]!['description'].toString(),
                                  style: TextStyle(
                                      color: Colors.black45,
                                      fontWeight: FontWeight.normal)),
                            ),
                            ActionChip(
                              backgroundColor: Color.fromRGBO(255, 240, 230, 1),
                              label: Text(
                                menu[i]!['price'].toString() + ' ₽',
                                style: TextStyle(
                                    color: Color.fromRGBO(220, 117, 44, 1),
                                    fontWeight: FontWeight.w500),
                              ),
                              onPressed: () {},
                            )
                          ],
                        ),
                      )
                    ],
                  ));
            },
          )
        ],
      ),
    );
  }
}
