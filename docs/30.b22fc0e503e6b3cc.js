"use strict";
(self.webpackChunkastha_UI = self.webpackChunkastha_UI || []).push([
  [30],
  {
    5030: (T, p, s) => {
      s.r(p), s.d(p, { PublicModule: () => M });
      var c = s(6814),
        l = s(2058),
        t = s(9291);
      let d = (() => {
          class n {
            transform(e) {
              return Math.floor(e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵpipe = t.Yjl({ name: "floor", type: n, pure: !0 })),
            n
          );
        })(),
        f = (() => {
          class n {
            constructor(e) {
              (this.router = e), (this.classes = "title");
            }
            toggleMenu() {
              console.log(this.classes),
                (this.classes =
                  "active title" === this.classes ? "title" : "active title");
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(t.Y36(l.F0));
            }),
            (n.ɵcmp = t.Xpm({
              type: n,
              selectors: [["app-header"]],
              decls: 37,
              vars: 1,
              consts: [
                [3, "ngClass"],
                [
                  "src",
                  "../../../Astha_foundation/assets/coursel_img/photo-removebg-preview.png",
                  "alt",
                  "logo",
                  "height",
                  "52.25px",
                  "width",
                  "50px",
                ],
                [1, "Name"],
                [1, "red"],
                [2, "color", "#313131"],
                [1, "menu"],
                ["href", ""],
                ["href", "#about_us"],
                ["href", "#events"],
                ["href", "#gallery"],
                ["href", "#support"],
                [1, "btn"],
                [1, "mobile-navbar-btn"],
                [
                  "name",
                  "menu-icon",
                  1,
                  "material-icons",
                  "mobile-nav-icon",
                  3,
                  "click",
                ],
                [
                  "name",
                  "close-icon",
                  1,
                  "material-icons",
                  "mobile-nav-icon",
                  3,
                  "click",
                ],
              ],
              template: function (e, o) {
                1 & e &&
                  (t.TgZ(0, "div", 0),
                  t._UZ(1, "img", 1),
                  t.TgZ(2, "div", 2)(3, "h5", 3),
                  t._uU(4, "Astha"),
                  t.qZA(),
                  t.TgZ(5, "h5", 4),
                  t._uU(6, "Foundation"),
                  t.qZA(),
                  t.TgZ(7, "p"),
                  t._uU(8, "ESTD: 2019"),
                  t.qZA()(),
                  t.TgZ(9, "div", 5)(10, "ul")(11, "li")(12, "a", 6),
                  t._uU(13, "Home"),
                  t.qZA()(),
                  t.TgZ(14, "li")(15, "a", 7),
                  t._uU(16, "About Us"),
                  t.qZA()(),
                  t.TgZ(17, "li")(18, "a"),
                  t._uU(19, "Causes"),
                  t.qZA()(),
                  t.TgZ(20, "li")(21, "a", 8),
                  t._uU(22, "Campaigns"),
                  t.qZA()(),
                  t.TgZ(23, "li")(24, "a", 9),
                  t._uU(25, "Gallery"),
                  t.qZA()(),
                  t.TgZ(26, "li")(27, "a", 10),
                  t._uU(28, "Support Us"),
                  t.qZA()()()(),
                  t.TgZ(29, "div", 11)(30, "p"),
                  t._uU(31, "Donate"),
                  t.qZA()(),
                  t.TgZ(32, "div", 12)(33, "i", 13),
                  t.NdJ("click", function () {
                    return o.toggleMenu();
                  }),
                  t._uU(34, "menu"),
                  t.qZA(),
                  t.TgZ(35, "i", 14),
                  t.NdJ("click", function () {
                    return o.toggleMenu();
                  }),
                  t._uU(36, "close"),
                  t.qZA()()()),
                  2 & e && t.Q6J("ngClass", o.classes);
              },
              dependencies: [c.mk],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Ultra&display=swap";*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}.title[_ngcontent-%COMP%]{padding:20px 50px;width:100%;background-color:transparent;display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:#f8f8f8}.title[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%]{cursor:pointer;margin-left:5px;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.title[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{color:#e33439;font-size:17px}.title[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:Ultra,serif;margin-bottom:0;font-size:12px;letter-spacing:5%}.title[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:6px;color:#313131;margin-bottom:0}img[_ngcontent-%COMP%]{cursor:pointer}.menu[_ngcontent-%COMP%]{width:75%;display:flex;flex-direction:row;align-items:center;justify-content:center;padding-right:0px 10px}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;border:none;list-style:none;float:left;margin:15px;cursor:pointer;transition:all .2s linear}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:13px;font-family:Ultra,serif;text-transform:capitalize;text-decoration:none;color:#313131;transition:all .3s linear;display:flex;justify-content:flex-start;align-items:center}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#e33439}.btn[_ngcontent-%COMP%]{border:2px solid #E33439;display:flex;height:60px;width:160px;background-color:#e33439;border-radius:5px;justify-content:center;align-items:center}.btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:14px;cursor:pointer;font-family:Ultra,serif;color:#f8f8f8}.btn[_ngcontent-%COMP%]:hover{transition:all .5s ease-in-out;background-color:#f8f8f8}.btn[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#e33439}.mobile-nav-icon[name=close-icon][_ngcontent-%COMP%]{display:none}.mobile-navbar-btn[_ngcontent-%COMP%]{display:none;background:transparent;cursor:pointer}',
              ],
            })),
            n
          );
        })(),
        u = (() => {
          class n {
            constructor(e, o) {
              (this.el = e),
                (this.renderer = o),
                (this.isCounting = !1),
                (this.cousesCount = 0),
                (this.eventCount = 0),
                (this.volunteersCount = 0),
                (this.donationsCount = 0),
                (this.isScrolledTo100px = !1);
            }
            onWindowScroll() {
              if (
                !this.isCounting &&
                this.isElementInViewport() &&
                scrollY >= 100
              ) {
                const e = window.scrollY;
                console.log(e), (this.isCounting = !0), this.startCounting();
              }
            }
            isElementInViewport() {
              const e = this.el.nativeElement.getBoundingClientRect();
              return e.top < window.innerHeight && e.bottom >= 0;
            }
            startCounting() {
              if (
                ((this.countingElement =
                  this.el.nativeElement.querySelector(".speakers-talk")),
                !this.countingElement)
              )
                return;
              let e = 0,
                o = 0,
                r = 0,
                a = 0;
              const w = setInterval(() => {
                e <= 70 && ((this.volunteersCount = e), e++),
                  o <= 50 && ((this.donationsCount = o), o++),
                  r < 26 && ((this.eventCount = r), r++),
                  a < 19 && ((this.cousesCount = a), a++),
                  e >= 20 &&
                    o >= 50 &&
                    r >= 27 &&
                    a >= 19 &&
                    (clearInterval(w), (this.isCounting = !1));
              }, 50);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(t.Y36(t.SBq), t.Y36(t.Qsj));
            }),
            (n.ɵcmp = t.Xpm({
              type: n,
              selectors: [["app-about"]],
              hostBindings: function (e, o) {
                1 & e &&
                  t.NdJ(
                    "scroll",
                    function () {
                      return o.onWindowScroll();
                    },
                    !1,
                    t.Jf7
                  );
              },
              decls: 95,
              vars: 4,
              consts: [
                [1, "about"],
                [1, "title"],
                [
                  2,
                  "font-size",
                  "16px",
                  "color",
                  "#F8F8F8",
                  "margin-bottom",
                  "40px",
                ],
                [2, "color", "#E33439", "font-size", "36px"],
                [2, "margin-top", "16px"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Abstract Pattern 1 Component - About Us - Who Are We.svg",
                  "alt",
                  "sign",
                  "height",
                  "24.45px",
                  "width",
                  "255.9px",
                ],
                [1, "about-body"],
                [1, "about-pic"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Who Are We Picture.svg",
                  "alt",
                  "Who are we pic",
                ],
                [1, "passage"],
                [1, "info-btn", 2, "margin-top", "24px"],
                [2, "margin-top", "16px", "margin-bottom", "40px"],
                [1, "passage", 2, "width", "100%", "text-align", "center"],
                [1, "Workcatagory"],
                [1, "division"],
                [1, "icon"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Food.svg",
                  "alt",
                  "food_icon",
                ],
                [1, "icon-title"],
                [1, "description"],
                ["href", "", 1, "read-more"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Book.svg",
                  "alt",
                  "book_icon",
                ],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Health.svg",
                  "alt",
                  "Health_icon",
                ],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Social-Service.svg",
                  "alt",
                  "SocialService_icon",
                ],
                [1, "speakers-talk"],
                [
                  2,
                  "color",
                  "#E33439",
                  "font-size",
                  "36px",
                  "width",
                  "40%",
                  "line-height",
                  "normal",
                ],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Abstract Pattern 3 Component - About Us - Impact Numbers.svg",
                  "alt",
                  "About_us",
                ],
                [1, "lowerSection"],
                [1, "speaker-description"],
                [
                  1,
                  "passage",
                  2,
                  "width",
                  "95%",
                  "line-height",
                  "2.5rem",
                  "margin",
                  "0px",
                ],
                [1, "speaker-block"],
                [1, "blocks"],
              ],
              template: function (e, o) {
                1 & e &&
                  (t.TgZ(0, "div", 0)(1, "div", 1)(2, "p", 2),
                  t._uU(3, "About Us"),
                  t.qZA(),
                  t.TgZ(4, "p", 3),
                  t._uU(5, " Who are we ...?? "),
                  t.qZA(),
                  t.TgZ(6, "div", 4),
                  t._UZ(7, "img", 5),
                  t.qZA()(),
                  t.TgZ(8, "div", 6)(9, "div", 7),
                  t._UZ(10, "img", 8),
                  t.qZA(),
                  t.TgZ(11, "div", 9)(12, "p"),
                  t._uU(
                    13,
                    " Astha Foundation is a self-funded NGO led by a committed team of individuals. Our mission is to assist underprivileged individuals by addressing their basic needs, providing education, promoting health and well-being, and empowering them for a better future. We invite you to join us in making a positive and lasting impact on the lives of those in need, and together, let's build a brighter future for all. "
                  ),
                  t.qZA(),
                  t.TgZ(14, "div", 10)(15, "p"),
                  t._uU(16, "More Info"),
                  t.qZA()()()(),
                  t.TgZ(17, "div", 1)(18, "p", 3),
                  t._uU(19, " What we do ...?? "),
                  t.qZA(),
                  t.TgZ(20, "div", 11),
                  t._UZ(21, "img", 5),
                  t.qZA(),
                  t.TgZ(22, "div", 12)(23, "p"),
                  t._uU(
                    24,
                    " We strategize and diligently work towards meaningful causes that bring about positive change in the lives of disadvantaged children and underprivileged individuals in our community. Our aim is to make a tangible difference and improve the circumstances for those in need. "
                  ),
                  t.qZA()()(),
                  t.TgZ(25, "div", 13)(26, "div", 14)(27, "div", 15),
                  t._UZ(28, "img", 16),
                  t.qZA(),
                  t.TgZ(29, "p", 17),
                  t._uU(30, " Healthy Food "),
                  t.qZA(),
                  t._UZ(31, "br"),
                  t.TgZ(32, "p", 18),
                  t._uU(
                    33,
                    "Provide nutritious and healthy food donations to those in need."
                  ),
                  t.qZA(),
                  t.TgZ(34, "a", 19),
                  t._uU(35, "Read more..."),
                  t.qZA()(),
                  t.TgZ(36, "div", 14)(37, "div", 15),
                  t._UZ(38, "img", 20),
                  t.qZA(),
                  t.TgZ(39, "p", 17),
                  t._uU(40, " Education "),
                  t.qZA(),
                  t._UZ(41, "br"),
                  t.TgZ(42, "p", 18),
                  t._uU(
                    43,
                    "Provide education to children, to create a brighter future for them."
                  ),
                  t.qZA(),
                  t.TgZ(44, "a", 19),
                  t._uU(45, "Read more..."),
                  t.qZA()(),
                  t.TgZ(46, "div", 14)(47, "div", 15),
                  t._UZ(48, "img", 21),
                  t.qZA(),
                  t.TgZ(49, "p", 17),
                  t._uU(50, " Health "),
                  t.qZA(),
                  t._UZ(51, "br"),
                  t.TgZ(52, "p", 18),
                  t._uU(
                    53,
                    "Provide education to children, to create a brighter future for them."
                  ),
                  t.qZA(),
                  t.TgZ(54, "a", 19),
                  t._uU(55, "Read more..."),
                  t.qZA()(),
                  t.TgZ(56, "div", 14)(57, "div", 15),
                  t._UZ(58, "img", 22),
                  t.qZA(),
                  t.TgZ(59, "p", 17),
                  t._uU(60, " Social-Service "),
                  t.qZA(),
                  t._UZ(61, "br"),
                  t.TgZ(62, "p", 18),
                  t._uU(
                    63,
                    "Provide education to children, to create a brighter future for them."
                  ),
                  t.qZA(),
                  t.TgZ(64, "a", 19),
                  t._uU(65, "Read more..."),
                  t.qZA()()(),
                  t.TgZ(66, "div", 23)(67, "p", 24),
                  t._uU(68, "Our numbers that speak"),
                  t.qZA(),
                  t._UZ(69, "img", 25),
                  t.TgZ(70, "div", 26)(71, "div", 27)(72, "p", 28),
                  t._uU(
                    73,
                    "We are motivated by the numbers that inspire us to give our best and continuously strive to surpass our own achievements. Witnessing our growth and the increasing number of individuals we are able to assist brings us great joy and satisfaction. We are committed to expanding our reach and making a positive impact on more lives with each passing day."
                  ),
                  t.qZA()(),
                  t.TgZ(74, "div", 29)(75, "div", 30)(76, "h1"),
                  t._uU(77),
                  t.qZA(),
                  t.TgZ(78, "p"),
                  t._uU(79, "Events"),
                  t.qZA()(),
                  t.TgZ(80, "div", 30)(81, "h1"),
                  t._uU(82),
                  t.qZA(),
                  t.TgZ(83, "p"),
                  t._uU(84, "Causes"),
                  t.qZA()(),
                  t.TgZ(85, "div", 30)(86, "h1"),
                  t._uU(87),
                  t.qZA(),
                  t.TgZ(88, "p"),
                  t._uU(89, "Volunteers"),
                  t.qZA()(),
                  t.TgZ(90, "div", 30)(91, "h1"),
                  t._uU(92),
                  t.qZA(),
                  t.TgZ(93, "p"),
                  t._uU(94, "Dontions"),
                  t.qZA()()()()()()),
                  2 & e &&
                    (t.xp6(77),
                    t.hij("", o.eventCount, "+"),
                    t.xp6(5),
                    t.hij("", o.cousesCount, "+"),
                    t.xp6(5),
                    t.hij("", o.volunteersCount, "+"),
                    t.xp6(5),
                    t.hij("", o.donationsCount, "K"));
              },
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Ultra&display=swap";*[_ngcontent-%COMP%]{box-sizing:border-box;background-color:#313131;font-family:Ultra,serif}.about[_ngcontent-%COMP%]{width:100%;padding:6%}.about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;flex-direction:column;display:flex;align-items:center;justify-content:center}.about-body[_ngcontent-%COMP%]{margin-bottom:120px;width:100%;display:flex;justify-content:space-between}.about-body[_ngcontent-%COMP%]   .about-pic[_ngcontent-%COMP%]{width:33%;margin-right:50px;position:relative;display:flex;justify-content:center;align-items:center}.info-btn[_ngcontent-%COMP%]{width:25px;display:flex;justify-content:flex-start;width:100%}.info-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;padding:11px 40px;border-radius:5px;background-color:#e33439;line-height:0px;font-size:13px;color:#f8f8f8;cursor:pointer;transition:all .5s ease}.info-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover{background-color:#313131;color:#e33439;transform:scale(2)}.passage[_ngcontent-%COMP%]{margin:40px 0;color:#f8f8f8;width:67%;font-size:20px}.passage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:40px;letter-spacing:2%}.frame[_ngcontent-%COMP%]{height:230px;width:230px;border-radius:50%}.sign1[_ngcontent-%COMP%]{background-image:url(20230824_120730.178929cbbd5d5a4d.png);background-repeat:no-repeat;background-size:8rem;background-position:center center;color:#f8f8f8;height:50px;width:250px;margin:20px}.Workcatagory[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(1,450px);gap:2px;margin-bottom:120px}.division[_ngcontent-%COMP%]{padding:0 35px;margin-top:50px;background-color:#343434;text-align:center;border-radius:5px;display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer;transition:all .2s ease}.division[_ngcontent-%COMP%]:hover{transform:translatey(50px)}.icon[_ngcontent-%COMP%]{background-color:#484848;display:flex;justify-content:center;align-items:center;margin-top:25px;height:100px;width:100px;border-radius:50%}.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{color:#f8f8f8;background-color:#484848}.icon-inside[_ngcontent-%COMP%]{color:#fff;height:40px;width:40px;background-color:#414141}.icon-title[_ngcontent-%COMP%]{background-color:#343434;font-size:20px;color:#e33439;padding-top:25px;letter-spacing:1px}.description[_ngcontent-%COMP%]{background-color:#343434;color:#f8f8f8;font-size:14px;word-spacing:5%}.read-more[_ngcontent-%COMP%]{color:#e33439;font-size:12px;background-color:#343434}.speakers-talk[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column;width:100%}.speakers-talk[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;left:86%;height:59px;width:100px}.speakers-talk[_ngcontent-%COMP%]   .speaker-description[_ngcontent-%COMP%]{height:100%;width:40%;display:flex;flex-direction:column;margin-right:120px}.speakers-talk[_ngcontent-%COMP%]   .speaker-block[_ngcontent-%COMP%]{width:40%;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,200px);gap:40px}.blocks[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#fff;border-radius:5px}.blocks[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{background-color:#fff;color:#e33439;font-family:Ultra,serif;font-size:48px;margin-bottom:20px}.blocks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#313131;font-size:20px;background-color:#fff}.lowerSection[_ngcontent-%COMP%]{display:flex;flex-direction:row}',
              ],
            })),
            n
          );
        })(),
        h = (() => {
          class n {
            constructor() {
              (this.EventDate = "25th August, 2023 at 11 am IST"),
                (this.EventPlace = "Shrirampur, Hooghly");
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵcmp = t.Xpm({
              type: n,
              selectors: [["app-events"]],
              decls: 79,
              vars: 2,
              consts: [
                [1, "events"],
                [2, "font-size", "16px", "margin-bottom", "40px"],
                [2, "color", "#E33439", "font-size", "36px"],
                [
                  2,
                  "margin-top",
                  "16px",
                  "margin-bottom",
                  "40px",
                  "color",
                  "#313131",
                ],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Abstract Pattern 1 Component - Events - Ongoing Initiatives.svg",
                  "alt",
                  "sign",
                  "height",
                  "24.45px",
                  "width",
                  "255.9px",
                ],
                [1, "Recent-event"],
                [1, "photo"],
                [1, "gallery"],
                [1, "details"],
                [2, "font-size", "24px", "color", "#E33439"],
                [1, "box"],
                [
                  1,
                  "fa-solid",
                  "fa-calendar-days",
                  2,
                  "color",
                  "#E33439",
                  "padding-right",
                  "15px",
                  "height",
                  "20px",
                ],
                [
                  1,
                  "fa-solid",
                  "fa-location-dot",
                  2,
                  "color",
                  "#E33439",
                  "padding-right",
                  "15px",
                  "height",
                  "20px",
                ],
                [1, "line"],
                [1, "price"],
                [1, "Goal"],
                [2, "color", "#313131", "padding-right", "5px"],
                [2, "color", "#E33439", "align-items", "center"],
                [
                  1,
                  "fa-solid",
                  "fa-indian-rupee-sign",
                  2,
                  "padding-right",
                  "5px",
                ],
                [1, "Raised"],
                [1, "info-btn"],
                [1, "silde-btn"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Arrow - Not Filled - Left.svg",
                  "alt",
                  "left_key",
                  2,
                  "margin-right",
                  "8px",
                ],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Arrow - Filled - Right.svg",
                  "alt",
                  "right_key",
                ],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Abstract Pattern 1 Component - Events - Upcoming Initiatives.svg",
                  "alt",
                  "sign",
                  "height",
                  "24.45px",
                  "width",
                  "255.9px",
                ],
                [1, "Initiatives"],
                [1, "unopened"],
                [1, "eventDate"],
                ["id", "Day"],
                ["id", "Month"],
                ["id", "Year"],
                [1, "eventDetails"],
                [2, "margin-bottom", "0px"],
                [1, "location"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Location - Filled.svg",
                  "alt",
                  "location_icon",
                  2,
                  "padding",
                  "4px",
                ],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Down - Circle - Down - Bold.svg",
                  "alt",
                  "downCircle",
                  "height",
                  "48px",
                  "width",
                  "48px",
                ],
                [1, "info-btn", 2, "margin-top", "40px"],
              ],
              template: function (e, o) {
                1 & e &&
                  (t.TgZ(0, "div", 0)(1, "p", 1),
                  t._uU(2, "Events"),
                  t.qZA(),
                  t.TgZ(3, "p", 2),
                  t._uU(4, " Ongoing Initiatives "),
                  t.qZA(),
                  t.TgZ(5, "div", 3),
                  t._UZ(6, "img", 4),
                  t.qZA(),
                  t.TgZ(7, "div", 5)(8, "div", 6),
                  t._UZ(9, "div", 7),
                  t.qZA(),
                  t.TgZ(10, "div", 8)(11, "p", 9),
                  t._uU(
                    12,
                    "Clothes distribution event at Nibedita Sikha Prangon"
                  ),
                  t.qZA(),
                  t._UZ(13, "br"),
                  t.TgZ(14, "div", 10),
                  t._UZ(15, "i", 11),
                  t.TgZ(16, "p"),
                  t._uU(17),
                  t.qZA()(),
                  t._UZ(18, "br"),
                  t.TgZ(19, "div", 10),
                  t._UZ(20, "i", 12),
                  t.TgZ(21, "p"),
                  t._uU(22),
                  t.qZA()(),
                  t._UZ(23, "div", 13),
                  t.TgZ(24, "div", 14)(25, "div", 15)(26, "div", 16),
                  t._uU(27, "Goal :"),
                  t.qZA(),
                  t.TgZ(28, "div", 17),
                  t._UZ(29, "i", 18),
                  t._uU(30, "25000"),
                  t.qZA()(),
                  t.TgZ(31, "div", 19)(32, "div", 16),
                  t._uU(33, "Raised :"),
                  t.qZA(),
                  t.TgZ(34, "div", 17),
                  t._UZ(35, "i", 18),
                  t._uU(36, "5000"),
                  t.qZA()()(),
                  t.TgZ(37, "div", 20),
                  t._uU(38, " Donate "),
                  t.qZA()()(),
                  t.TgZ(39, "div", 21),
                  t._UZ(40, "img", 22)(41, "img", 23),
                  t.qZA(),
                  t.TgZ(42, "p", 2),
                  t._uU(43, " Upcoming Initiatives "),
                  t.qZA(),
                  t.TgZ(44, "div", 3),
                  t._UZ(45, "img", 24),
                  t.qZA(),
                  t.TgZ(46, "div", 25)(47, "div", 26)(48, "div", 27)(
                    49,
                    "p",
                    28
                  ),
                  t._uU(50, "15"),
                  t.qZA(),
                  t.TgZ(51, "p", 29),
                  t._uU(52, "August"),
                  t.qZA(),
                  t.TgZ(53, "p", 30),
                  t._uU(54, "2023"),
                  t.qZA()(),
                  t.TgZ(55, "div", 31)(56, "p", 32),
                  t._uU(
                    57,
                    "Celebrating the 2nd Anniversary of Astha Foundation"
                  ),
                  t.qZA(),
                  t.TgZ(58, "div", 33),
                  t._UZ(59, "img", 34),
                  t._uU(60, "Shrirampur, Hooghly"),
                  t.qZA()(),
                  t._UZ(61, "img", 35),
                  t.qZA(),
                  t.TgZ(62, "div", 26)(63, "div", 27)(64, "p", 28),
                  t._uU(65, "25"),
                  t.qZA(),
                  t.TgZ(66, "p", 29),
                  t._uU(67, "October"),
                  t.qZA(),
                  t.TgZ(68, "p", 30),
                  t._uU(69, "2023"),
                  t.qZA()(),
                  t.TgZ(70, "div", 31)(71, "p", 32),
                  t._uU(
                    72,
                    "Distributing New Cloths for the Durga Puja Festival"
                  ),
                  t.qZA(),
                  t.TgZ(73, "div", 33),
                  t._UZ(74, "img", 34),
                  t._uU(75, "Gosaba, Sunderbans"),
                  t.qZA()(),
                  t._UZ(76, "img", 35),
                  t.qZA()(),
                  t.TgZ(77, "div", 36),
                  t._uU(78, " See More "),
                  t.qZA()()),
                  2 & e &&
                    (t.xp6(17),
                    t.Oqu(o.EventDate),
                    t.xp6(5),
                    t.Oqu(o.EventPlace));
              },
              styles: [
                "*[_ngcontent-%COMP%]{box-sizing:border-box}.events[_ngcontent-%COMP%]{margin:100px;display:flex;justify-content:center;align-items:center;flex-direction:column}.Recent-event[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;height:500px;width:90%;border-radius:5px;box-shadow:0 2px 8px 2px #a7a7a780}.Recent-event[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:35%;position:relative}.Recent-event[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:15rem;width:15rem;border-radius:50%;background-image:url(shail-sharma-EGPZ7uvcxZA-unsplash.043c862e7e595377.jpg);background-repeat:no-repeat;background-size:140%;background-position:-10px;box-shadow:2px 0 8px 1px #0003}.Recent-event[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{width:65%;padding:80px 35px 80px 5px;line-height:normal}.Recent-event[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:20px;width:100%;word-spacing:5px;line-height:normal}.box[_ngcontent-%COMP%]{padding-left:20px;display:flex;justify-content:center;align-items:center;flex-direction:row;width:90%}.line[_ngcontent-%COMP%]{margin-top:40px;width:100%;height:2px;background-color:#dfdfdf}.price[_ngcontent-%COMP%]{padding:35px 0;display:flex;justify-content:space-between;font-size:20px;align-items:center}.price[_ngcontent-%COMP%]   .Goal[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:row;justify-content:flex-start}.price[_ngcontent-%COMP%]   .Raised[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:row;justify-content:flex-end}.price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex}.info-btn[_ngcontent-%COMP%]{border-radius:5px;width:160px;height:60px;display:flex;justify-content:center;align-items:center;font-size:14px;background-color:#e33439;line-height:0px;color:#f8f8f8}.silde-btn[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:120px}.silde-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:64px;width:64px}.Initiatives[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.unopened[_ngcontent-%COMP%]{display:flex;width:80%;flex-direction:row;padding:20px 40px;border-radius:5px;box-shadow:0 2px 8px 2px #9e9e9e33}.eventDate[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.eventDetails[_ngcontent-%COMP%]{font-size:26px;color:#e33439;line-height:normal;margin:0 40px;display:flex;justify-content:center;align-items:flex-start;flex-direction:column}#Day[_ngcontent-%COMP%]{font-size:48px;color:#e33439}#Month[_ngcontent-%COMP%], #Year[_ngcontent-%COMP%]{font-size:16px}.location[_ngcontent-%COMP%]{font-size:20px;color:#313131}",
              ],
            })),
            n
          );
        })();
      var g = s(1735);
      function x(n, i) {
        if (
          (1 & n && (t.TgZ(0, "div", 10), t._UZ(1, "img", 11), t.qZA()), 2 & n)
        ) {
          const e = i.$implicit;
          t.xp6(1), t.s9C("src", e.src, t.LSH);
        }
      }
      let m = (() => {
          class n {
            constructor() {
              (this.dummyPictures = [
                {
                  src: "../../../Astha_foundation/assets/coursel_img/shafin-ashraf-eCqiA4HvlIs-unsplash.jpg",
                },
                {
                  src: "../../../Astha_foundation/assets/coursel_img/sanjoy-sadhukhan-QPnbS4qB4lI-unsplash.jpg",
                },
                {
                  src: "../../../Astha_foundation/assets/coursel_img/marwan-ahmed-nr5xEjOtiMA-unsplash.jpg",
                },
                {
                  src: "../../../Astha_foundation/assets/coursel_img/loren-joseph-XoBWUBA3Amg-unsplash.jpg",
                },
                {
                  src: "../../../Astha_foundation/assets/coursel_img/aman-shrivastava-w6caoaJzXIE-unsplash.jpg",
                },
                {
                  src: "../../../Astha_foundation/assets/coursel_img/atul-pandey-0f3bZHXZSz8-unsplash.jpg",
                },
              ]),
                (this.limit = 3),
                (this.masonryOptions = {
                  gutter: 0,
                  resize: !0,
                  initLayout: !0,
                  fitWidth: !0,
                });
            }
            ngOnInit() {
              this.masonryImages = this.dummyPictures.slice(0, this.limit);
            }
            showMoreImages() {
              (this.limit += 4),
                (this.masonryImages = this.dummyPictures.slice(0, this.limit));
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵcmp = t.Xpm({
              type: n,
              selectors: [["app-gallery"]],
              decls: 13,
              vars: 2,
              consts: [
                [1, "gallery"],
                [1, "title"],
                [
                  2,
                  "font-size",
                  "16px",
                  "color",
                  "#F8F8F8",
                  "margin-bottom",
                  "40px",
                ],
                [2, "color", "#E33439", "font-size", "36px"],
                [2, "margin-top", "16px"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Abstract Pattern 1 Component - Gallery.svg",
                  "alt",
                  "sign",
                  "height",
                  "24.45px",
                  "width",
                  "255.9px",
                ],
                [1, "PhotoSection"],
                [3, "options"],
                [
                  "ngxMasonryItem",
                  "",
                  "class",
                  "masonry-item",
                  "class",
                  "masonry-item",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [1, "info-btn", 2, "margin-top", "40px", 3, "click"],
                ["ngxMasonryItem", "", 1, "masonry-item"],
                [3, "src"],
              ],
              template: function (e, o) {
                1 & e &&
                  (t.TgZ(0, "div", 0)(1, "div", 1)(2, "p", 2),
                  t._uU(3, "Gallery"),
                  t.qZA(),
                  t.TgZ(4, "p", 3),
                  t._uU(5, " Capturing Hope: Our Journey in Pictures "),
                  t.qZA(),
                  t.TgZ(6, "div", 4),
                  t._UZ(7, "img", 5),
                  t.qZA()(),
                  t.TgZ(8, "div", 6)(9, "ngx-masonry", 7),
                  t.YNc(10, x, 2, 1, "div", 8),
                  t.qZA()(),
                  t.TgZ(11, "div", 9),
                  t.NdJ("click", function () {
                    return o.showMoreImages();
                  }),
                  t._uU(12, " See More "),
                  t.qZA()()),
                  2 & e &&
                    (t.xp6(9),
                    t.Q6J("options", o.masonryOptions),
                    t.xp6(1),
                    t.Q6J("ngForOf", o.masonryImages));
              },
              dependencies: [c.sg, g.gn, g.CL],
              styles: [
                "*[_ngcontent-%COMP%]{box-sizing:border-box;background-color:#313131}.gallery[_ngcontent-%COMP%]{width:100%;padding:6%;display:flex;align-items:center;justify-content:center;flex-direction:column}.gallery[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:90%;flex-direction:column;display:flex;align-items:center;justify-content:center}.PhotoSection[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:40px}.masonry-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;padding:20px}.masonry-item[_ngcontent-%COMP%]{width:100vh}.masonry-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:auto}.info-btn[_ngcontent-%COMP%]{cursor:pointer;border-radius:5px;width:160px;height:60px;display:flex;justify-content:center;align-items:center;font-size:14px;background-color:#e33439;line-height:0px;color:#f8f8f8}",
              ],
            })),
            n
          );
        })(),
        _ = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵcmp = t.Xpm({
              type: n,
              selectors: [["app-testimonials"]],
              decls: 29,
              vars: 0,
              consts: [
                [1, "testimonials"],
                [1, "ptrn1"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Abstarct Pattern 5 Component - Testimonials.svg",
                  "alt",
                  "component 5",
                ],
                [1, "ptrn2"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Abstract Pattern 4 Component - Testimonials.svg",
                  "alt",
                  "component 4",
                ],
                [1, "components"],
                [
                  2,
                  "color",
                  "#313131",
                  "font-size",
                  "16px",
                  "margin-bottom",
                  "40px",
                ],
                [2, "color", "#e33439", "font-size", "36px"],
                [
                  2,
                  "margin-top",
                  "16px",
                  "margin-bottom",
                  "40px",
                  "color",
                  "#313131",
                ],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Abstract Pattern 1 Component - Events - Upcoming Initiatives.svg",
                  "alt",
                  "sign",
                  "height",
                  "24.45px",
                  "width",
                  "255.9px",
                ],
                [1, "userTestimonials"],
                [1, "leftQuotes"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Left-Quotes.svg",
                  "alt",
                  "Left-Quotes",
                ],
                [1, "text"],
                [1, "Right-Quotes"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Right-Quotes.svg",
                  "alt",
                  "Right-Quotes",
                  2,
                  "background-color",
                  "#f8f8f800",
                ],
                [1, "testimonialPerson"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
                  "alt",
                  "testimonialPerson",
                  2,
                  "align-self",
                  "center",
                ],
                [
                  2,
                  "color",
                  "#E33439",
                  "font-size",
                  "20px",
                  "margin-top",
                  "8px",
                ],
                [2, "color", "#313131", "font-size", "16", "margin-top", "8px"],
                [1, "testimonialSlider"],
              ],
              template: function (e, o) {
                1 & e &&
                  (t.TgZ(0, "div", 0)(1, "div", 1),
                  t._UZ(2, "img", 2),
                  t.qZA(),
                  t.TgZ(3, "div", 3),
                  t._UZ(4, "img", 4),
                  t.qZA(),
                  t.TgZ(5, "div", 5)(6, "p", 6),
                  t._uU(7, "Testimonials"),
                  t.qZA(),
                  t.TgZ(8, "p", 7),
                  t._uU(9, "Upcoming Initiatives"),
                  t.qZA(),
                  t.TgZ(10, "div", 8),
                  t._UZ(11, "img", 9),
                  t.qZA(),
                  t.TgZ(12, "div", 10)(13, "div", 11),
                  t._UZ(14, "img", 12),
                  t.qZA(),
                  t.TgZ(15, "div", 13)(16, "p"),
                  t._uU(
                    17,
                    "Working with at Astha Foundation has been an absolute privilege. Their passion for helping the needy is truly inspiring. Their dedication and compassion have made a significant difference in the lives of countless individuals and families."
                  ),
                  t.qZA()(),
                  t.TgZ(18, "div", 14),
                  t._UZ(19, "img", 15),
                  t.qZA(),
                  t.TgZ(20, "div", 16),
                  t._UZ(21, "img", 17),
                  t.TgZ(22, "p", 18),
                  t._uU(23, "Kunal Goshwami"),
                  t.qZA(),
                  t.TgZ(24, "p", 19),
                  t._uU(25, "Software Engineer"),
                  t.qZA()(),
                  t.TgZ(26, "div", 20)(27, "p"),
                  t._uU(28, "..."),
                  t.qZA()()()()());
              },
              styles: [
                "*[_ngcontent-%COMP%]{box-sizing:border-box;background-color:#f8f8f8}.testimonials[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between}.components[_ngcontent-%COMP%]{background-color:#f8f8f800;padding:100px;display:flex;justify-content:center;align-items:center;flex-direction:column;position:relative;top:0;z-index:3}.userTestimonials[_ngcontent-%COMP%]{background-color:#f8f8f800;width:75%;display:flex;flex-direction:column;align-items:center}.userTestimonials[_ngcontent-%COMP%]   .leftQuotes[_ngcontent-%COMP%]{background-color:#f8f8f800;display:flex;justify-content:flex-start;width:100%}.userTestimonials[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{background-color:#f8f8f800;width:120%;display:flex;justify-content:center}.userTestimonials[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#f8f8f800;width:77.77%;margin-bottom:0;font-size:20px;line-height:40px;text-align:center;letter-spacing:2%}.userTestimonials[_ngcontent-%COMP%]   .Right-Quotes[_ngcontent-%COMP%]{background-color:#f8f8f800;width:100%;display:flex;justify-content:flex-end}.userTestimonials[_ngcontent-%COMP%]   .testimonialPerson[_ngcontent-%COMP%]{background-color:#f8f8f800;display:flex;justify-content:center;flex-direction:column;text-align:center}.userTestimonials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:120px;width:120px;border-radius:5px}.testimonialSlider[_ngcontent-%COMP%]{margin-top:40px;text-align:center}.testimonialSlider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:25px;letter-spacing:5px}.ptrn1[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:1}.ptrn2[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:2;filter:opacity(.5)}",
              ],
            })),
            n
          );
        })(),
        v = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵcmp = t.Xpm({
              type: n,
              selectors: [["app-subscribe"]],
              decls: 18,
              vars: 0,
              consts: [
                [1, "Subscription"],
                [1, "SubcriptionTitle"],
                [1, "SubscriptionBody"],
                [1, "email"],
                [1, "input"],
                [1, "email-btn"],
                [1, "social-icon"],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Whatsapp.svg",
                  "alt",
                  "whats_icon",
                ],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Facebook.svg",
                  "alt",
                  "facebook_icon",
                ],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Twitter.svg",
                  "alt",
                  "twitter_icon",
                ],
                [
                  "src",
                  "../../../Astha_foundation/assets/Home Page Components/Instagram.svg",
                  "alt",
                  "Instagram_icon",
                ],
                [
                  2,
                  "background-color",
                  "#9E9E9E",
                  "height",
                  "2px",
                  "width",
                  "100%",
                ],
                [1, "copyright"],
              ],
              template: function (e, o) {
                1 & e &&
                  (t.TgZ(0, "div", 0)(1, "div", 1),
                  t._uU(2, "Subscribe to our newsletter"),
                  t.qZA(),
                  t.TgZ(3, "div", 2),
                  t._uU(
                    4,
                    " Stay updated with the latest news, events, and inspiring stories. Subscribe to our newsletter and be part of our mission to make a positive impact. Join now! "
                  ),
                  t.qZA(),
                  t.TgZ(5, "div", 3)(6, "div", 4),
                  t._uU(7, " Enter your email "),
                  t.qZA(),
                  t.TgZ(8, "div", 5),
                  t._uU(9, " Subscribe "),
                  t.qZA()(),
                  t.TgZ(10, "div", 6),
                  t._UZ(11, "img", 7)(12, "img", 8)(13, "img", 9)(
                    14,
                    "img",
                    10
                  ),
                  t.qZA(),
                  t._UZ(15, "div", 11),
                  t.TgZ(16, "div", 12),
                  t._uU(
                    17,
                    "Copyright \xa9 2023 Astha Foundation | All Rights Reserved "
                  ),
                  t.qZA()());
              },
              styles: [
                "*[_ngcontent-%COMP%]{box-sizing:border-box;background-color:#313131}.Subscription[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:120px;flex-direction:column}.Subscription[_ngcontent-%COMP%]   .SubcriptionTitle[_ngcontent-%COMP%]{color:#e33439;font-size:20px}.Subscription[_ngcontent-%COMP%]   .SubscriptionBody[_ngcontent-%COMP%]{margin:40px 0;line-height:40px;font-size:14px;color:#f8f8f8;text-align:center;width:66.7%}.email[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:56px;width:50.3%;border-radius:5%;flex-direction:row}.email[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border-radius:4%;background-color:#f8f8f8;width:69.53%;height:100%;display:flex;justify-content:flex-start;padding:0 40px;align-items:center;color:#9e9e9e;font-size:12px}.email[_ngcontent-%COMP%]   .email-btn[_ngcontent-%COMP%]{border-radius:5%;background-color:#e33439;height:100%;width:26.5%;display:flex;justify-content:center;align-items:center;color:#f8f8f8;font-size:14px}.social-icon[_ngcontent-%COMP%]{margin:40px 0}.social-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 8px;height:48px;width:48px}.copyright[_ngcontent-%COMP%]{font-size:12px;line-height:40px;letter-spacing:2%;color:#484848;margin:24px 0}",
              ],
            })),
            n
          );
        })();
      const C = [
        {
          path: "",
          component: (() => {
            class n {
              constructor() {
                (this.isHovered = !1),
                  (this.titlBody =
                    "Together, we can change lives and create a brighter future."),
                  (this.titleText = ""),
                  (this.index = 0),
                  (this.EventName =
                    "Clothes Distribution at Nibedita Sikhya Prangon."),
                  (this.EventDate = "25th August, 2023 at 11 am IST"),
                  (this.EventPlace = "Shrirampur, Hooghly"),
                  (this.targetDate = new Date("2023-12-31T23:59:59"));
              }
              ngOnInit() {
                this.updateTime(),
                  (this.countdownInterval = setInterval(() => {
                    this.updateTime();
                  }, 1e3)),
                  (this.countdownInterval = setInterval(() => {
                    this.updateText();
                  }, 80));
              }
              updateText() {
                this.titleText += this.titlBody.charAt(this.index++);
              }
              deleteText() {
                setInterval(() => {
                  this.titleText = this.titleText.substring(0, this.index--);
                }, 80);
              }
              updateTime() {
                const e = new Date(),
                  o = this.targetDate.getTime() - e.getTime();
                this.remainingTime = Math.max(o / 1e3, 0);
              }
            }
            return (
              (n.ɵfac = function (e) {
                return new (e || n)();
              }),
              (n.ɵcmp = t.Xpm({
                type: n,
                selectors: [["app-home"]],
                features: [t._Bn([d])],
                decls: 80,
                vars: 16,
                consts: [
                  [2, "height", "120px", "width", "100%"],
                  [1, "home"],
                  [1, "heroSection", "layer"],
                  [
                    "src",
                    "../../../Astha_foundation/assets/Home Page Components/Hero Pattern.png",
                    "alt",
                    "hero",
                    2,
                    "position",
                    "absolute",
                    "width",
                    "100%",
                  ],
                  [
                    "src",
                    "../../../Astha_foundation/assets/Home Page Components/sanjoy-sadhukhan-3QNEf_oN-WI-unsplash.jpg",
                    "alt",
                    "",
                    2,
                    "float",
                    "right",
                  ],
                  [1, "overlay", 2, "position", "absolute"],
                  [1, "shw"],
                  [1, "upper-btn"],
                  [1, "btn", "info-white"],
                  [1, "btn", "play"],
                  [1, "fa-solid", "fa-circle-play", "icon"],
                  [2, "cursor", "pointer"],
                  [1, "social-icon"],
                  [1, "fa-brands", "fa-whatsapp", "social"],
                  [1, "fa-brands", "fa-facebook", "social"],
                  [1, "fa-brands", "fa-twitter", "social"],
                  [1, "fa-brands", "fa-instagram", "social"],
                  [1, "event-coundown"],
                  [1, "event-info"],
                  [2, "font-size", "26px", "padding-bottom", "12px"],
                  [1, "box"],
                  [
                    1,
                    "fa-solid",
                    "fa-calendar-days",
                    2,
                    "color",
                    "#E33439",
                    "height",
                    "24px",
                    "width",
                    "24px",
                    "padding",
                    "24px",
                  ],
                  [
                    1,
                    "fa-solid",
                    "fa-location-dot",
                    2,
                    "color",
                    "#E33439",
                    "height",
                    "24px",
                    "width",
                    "24px",
                    "padding",
                    "24px",
                  ],
                  [
                    2,
                    "display",
                    "flex",
                    "flex-direction",
                    "row",
                    "justify-content",
                    "flex-start",
                    "width",
                    "100%",
                    "margin-top",
                    "12px",
                  ],
                  [1, "btn", "join"],
                  [1, "count-down"],
                  [1, "clock"],
                  [1, "timer"],
                  [1, "number"],
                  [1, "words"],
                  [1, "devider"],
                  [1, "circle"],
                  [1, "circle", 2, "margin-top", "5px"],
                  [1, "Time-pattern"],
                  [
                    "src",
                    "../../../Astha_foundation/assets/Home Page Components/Time-Pattern-Component.svg",
                    "alt",
                    "Time-Pattern",
                  ],
                  ["id", "about_us"],
                  ["id", "events"],
                  ["id", "gallery"],
                  ["id", "support"],
                ],
                template: function (e, o) {
                  1 & e &&
                    (t._UZ(0, "app-header", 0),
                    t.TgZ(1, "div", 1)(2, "div", 2),
                    t._UZ(3, "img", 3)(4, "img", 4),
                    t.qZA(),
                    t.TgZ(5, "div", 5)(6, "div", 6)(7, "p"),
                    t._uU(8),
                    t.qZA(),
                    t.TgZ(9, "div", 7)(10, "div", 8),
                    t._uU(11, "Donate"),
                    t.qZA(),
                    t.TgZ(12, "div", 9),
                    t._UZ(13, "i", 10),
                    t.TgZ(14, "label", 11),
                    t._uU(15, "Our Story"),
                    t.qZA()()(),
                    t.TgZ(16, "div", 12),
                    t._UZ(17, "i", 13)(18, "i", 14)(19, "i", 15)(20, "i", 16),
                    t.qZA()()()(),
                    t.TgZ(21, "div", 17)(22, "div", 18)(23, "p", 19),
                    t._uU(24),
                    t.qZA(),
                    t.TgZ(25, "div", 20),
                    t._UZ(26, "i", 21),
                    t.TgZ(27, "p"),
                    t._uU(28),
                    t.qZA()(),
                    t.TgZ(29, "div", 20),
                    t._UZ(30, "i", 22),
                    t.TgZ(31, "p"),
                    t._uU(32),
                    t.qZA()(),
                    t.TgZ(33, "div", 23)(34, "div", 8),
                    t._uU(35, "More info"),
                    t.qZA(),
                    t.TgZ(36, "div", 24),
                    t._uU(37, " Join Event "),
                    t.qZA()()(),
                    t.TgZ(38, "div", 25)(39, "div", 26)(40, "div", 27)(
                      41,
                      "div",
                      28
                    ),
                    t._uU(42),
                    t.ALo(43, "floor"),
                    t.qZA(),
                    t.TgZ(44, "div", 29),
                    t._uU(45, "Days"),
                    t.qZA()(),
                    t.TgZ(46, "div", 30),
                    t._UZ(47, "div", 31)(48, "div", 32),
                    t.qZA(),
                    t.TgZ(49, "div", 27)(50, "div", 28),
                    t._uU(51),
                    t.ALo(52, "floor"),
                    t.qZA(),
                    t.TgZ(53, "div", 29),
                    t._uU(54, "Hours"),
                    t.qZA()(),
                    t.TgZ(55, "div", 30),
                    t._UZ(56, "div", 31)(57, "div", 32),
                    t.qZA(),
                    t.TgZ(58, "div", 27)(59, "div", 28),
                    t._uU(60),
                    t.ALo(61, "floor"),
                    t.qZA(),
                    t.TgZ(62, "div", 29),
                    t._uU(63, "Minutes"),
                    t.qZA()(),
                    t.TgZ(64, "div", 30),
                    t._UZ(65, "div", 31)(66, "div", 32),
                    t.qZA(),
                    t.TgZ(67, "div", 27)(68, "div", 28),
                    t._uU(69),
                    t.ALo(70, "floor"),
                    t.qZA(),
                    t.TgZ(71, "div", 29),
                    t._uU(72, "Seconds"),
                    t.qZA()(),
                    t.TgZ(73, "div", 33),
                    t._UZ(74, "img", 34),
                    t.qZA()()()(),
                    t._UZ(75, "app-about", 35)(76, "app-events", 36)(
                      77,
                      "app-gallery",
                      37
                    )(78, "app-testimonials")(79, "app-subscribe", 38)),
                    2 & e &&
                      (t.xp6(8),
                      t.Oqu(o.titleText),
                      t.xp6(16),
                      t.Oqu(o.EventName),
                      t.xp6(4),
                      t.Oqu(o.EventDate),
                      t.xp6(4),
                      t.Oqu(o.EventPlace),
                      t.xp6(10),
                      t.Oqu(t.lcZ(43, 8, o.remainingTime / 86400)),
                      t.xp6(9),
                      t.Oqu(t.lcZ(52, 10, (o.remainingTime % 86400) / 3600)),
                      t.xp6(9),
                      t.Oqu(t.lcZ(61, 12, (o.remainingTime % 3600) / 60)),
                      t.xp6(9),
                      t.Oqu(t.lcZ(70, 14, o.remainingTime % 60)));
                },
                dependencies: [f, u, h, m, _, v, d],
                styles: [
                  '@import"https://fonts.googleapis.com/css2?family=Ultra&display=swap";[_ngcontent-%COMP%]:root{--trans: all .3s linear}*[_ngcontent-%COMP%]{font-family:Ultra,serif;scroll-behavior:smooth}.home[_ngcontent-%COMP%]{position:relative;height:720px}app-header[_ngcontent-%COMP%]{top:0;left:0;right:0}.overlay[_ngcontent-%COMP%]{top:0;left:0;width:50%;z-index:3;display:flex;justify-content:center;align-items:center}.shw[_ngcontent-%COMP%]{padding:30px 0 30px 100px;display:flex;justify-content:center;align-items:flex-start;flex-direction:column;height:100%;width:100%}.shw[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{cursor:pointer;font-size:32px;width:80%;letter-spacing:5%;word-spacing:5px;line-height:normal;color:#f8f8f8;margin-bottom:50px}.shw[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]{margin-top:40px;display:flex;justify-content:center;align-items:center;cursor:pointer}.typewriter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;font-size:24px;border-right:3px solid #f8f8f8;animation:_ngcontent-%COMP%_typing 4s steps(40) 1s forwards;margin:0;padding:10px 0}@keyframes _ngcontent-%COMP%_typing{0%{width:0}to{width:100%}}.typewriter[_ngcontent-%COMP%]:hover   .typewriter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{animation:none}.social[_ngcontent-%COMP%]{color:#f8f8f8;margin:30px;height:22px;transition:all .5s ease}.social[_ngcontent-%COMP%]:hover{transform:scale(2) translate(5px) translateY(5px)}.upper-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row}.btn[_ngcontent-%COMP%]{cursor:pointer;padding:0;display:flex;font-size:14px;height:60px;width:160px;justify-content:center;align-items:center}.play[_ngcontent-%COMP%]{margin-left:24px;border:2px solid #f8f8f8;width:200px}.play[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#f8f8f8;transition:all .5s ease}.play[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:8px;height:20px;color:#f8f8f8;transition:all .5s ease}.play[_ngcontent-%COMP%]:hover{background-color:#e33439;border:2px solid #e33439}.play[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%]{opacity:0}.play[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]{transform:scale(4) translate(45%);color:#f8f8f8}.info-white[_ngcontent-%COMP%]{border:2px solid #e33439;background-color:#f8f8f8;color:#e33439}.info-white[_ngcontent-%COMP%]:hover{background-color:#e33439;border:2px solid #f8f8f8;color:#f8f8f8;transition:all .4s ease-in-out}.join[_ngcontent-%COMP%]{margin-left:24px;border-radius:5px;background-color:#e33439;color:#f8f8f8;border:2px solid #e33439;transition:all .5s ease}.join[_ngcontent-%COMP%]:hover{background-color:#f8f8f8;color:#e33439}.number[_ngcontent-%COMP%]{color:#e33439;font-size:48px;display:flex;justify-content:center}.words[_ngcontent-%COMP%]{padding-top:24px;font-size:16px;display:flex;justify-content:center}.Time-pattern[_ngcontent-%COMP%]{position:relative;top:-73px}.event-coundown[_ngcontent-%COMP%]{display:flex;width:100%;height:534px;justify-content:space-between;align-items:center;flex-direction:row}.event-coundown[_ngcontent-%COMP%]   .event-info[_ngcontent-%COMP%]{width:50%;padding-left:10%;justify-content:flex-start;align-items:center;display:flex;flex-direction:column}.event-coundown[_ngcontent-%COMP%]   .event-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:20px;width:100%;color:#313131;word-spacing:5px;line-height:normal}.event-coundown[_ngcontent-%COMP%]   .count-down[_ngcontent-%COMP%]{width:50%;height:50%;display:flex;justify-content:center}.event-coundown[_ngcontent-%COMP%]   .count-down[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]{width:90%;height:100%;display:flex;flex-direction:row;align-items:center}.event-coundown[_ngcontent-%COMP%]   .count-down[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%]{margin:0 24px;display:flex;flex-direction:column;align-items:center}.event-coundown[_ngcontent-%COMP%]   .count-down[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{background-color:#e33439;border-radius:50%;height:12px;width:12px}.box[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;flex-direction:row;width:100%}a[_ngcontent-%COMP%]{overflow:hidden;text-transform:uppercase;text-decoration:none;font-size:1rem;background-color:#0003;padding:20px 4rem;text-align:center;position:relative;-webkit-text-decoration:uppercase;text-decoration:uppercase;color:#d5d6d8;transition:all .3s linear;cursor:pointer;z-index:1}a[_ngcontent-%COMP%]:before{content:"";left:0;top:0;background-color:#f0932b;height:100%;width:100%;transform:translate(-100%);position:absolute;transition:all .3s linear}a[_ngcontent-%COMP%]:hover{color:#fff}a[_ngcontent-%COMP%]:hover:before{transform:translate(0);z-index:-1}.overlay[_ngcontent-%COMP%]{display:flex;justify-content:center;height:100%;align-items:center}.heroSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:720px;background-repeat:no-repeat;background-size:cover;background-position:10px}',
                ],
              })),
              n
            );
          })(),
        },
        { path: "about", component: u },
        { path: "gallery", component: m },
      ];
      let b = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.oAB({ type: n })),
          (n.ɵinj = t.cJS({ imports: [l.Bz.forChild(C), l.Bz] })),
          n
        );
      })();
      var Z = s(1175),
        P = s(5597),
        y = s(8645);
      let O = (() => {
          class n {
            constructor() {
              (this.scrollSubject = new y.x()),
                (this.scrollEvent$ = this.scrollSubject.asObservable());
            }
            triggerScrollEvent() {
              this.scrollSubject.next();
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵprov = t.Yz7({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        M = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.oAB({ type: n })),
            (n.ɵinj = t.cJS({
              providers: [O],
              imports: [c.ez, b, Z.Ps, g.Te, P.uH],
            })),
            n
          );
        })();
    },
  },
]);
