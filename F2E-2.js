(function (Vue) {
  let vm = new Vue({
    el: "#app",
    data: {
      loadcards: [
        {
          name: "spade",
          num: 1,
          numsvg: 'mark/A.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/a.png',
        },
        {
          name: "spade",
          num: 2,
          numsvg: 'mark/2.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/2.png',
        },
        {
          name: "heart",
          num: 3,
          numsvg: 'mark/3.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/3.png',
        },
        {
          name: "club",
          num: 4,
          numsvg: 'mark/4.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/4.png',
        },
        {
          name: "club",
          num: 5,
          numsvg: 'mark/5.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/5.png',
        },
        {
          name: "heart",
          num: 4,
          numsvg: 'mark/4.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/4.png',
        },
        {
          name: "diamond",
          num: 5,
          numsvg: 'mark/5.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/5.png',
        },
        {
          name: "diamond",
          num: 6,
          numsvg: 'mark/6.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/6.png',
        },
        {
          name: "club",
          num: 9,
          numsvg: 'mark/9.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/9.png',
        },
        {
          name: "club",
          num: 10,
          numsvg: 'mark/10.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/10.png',
        },
      ],

      cards: [
        {
          name: "spade",
          num: 1,
          numsvg: 'mark/A.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/a.png',
        },
        {
          name: "spade",
          num: 2,
          numsvg: 'mark/2.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/2.png',
        },
        {
          name: "spade",
          num: 3,
          numsvg: 'mark/3.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/3.png',
        },
        {
          name: "spade",
          num: 4,
          numsvg: 'mark/4.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/4.png',
        },
        {
          name: "spade",
          num: 5,
          numsvg: 'mark/5.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/5.png',
        },
        {
          name: "spade",
          num: 6,
          numsvg: 'mark/6.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/6.png',
        },
        {
          name: "spade",
          num: 7,
          numsvg: 'mark/7.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/7.png',
        },
        {
          name: "spade",
          num: 8,
          numsvg: 'mark/8.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/8.png',
        },
        {
          name: "spade",
          num: 9,
          numsvg: 'mark/9.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/9.png',
        },
        {
          name: "spade",
          num: 10,
          numsvg: 'mark/10.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/10.png',
        },
        {
          name: "spade",
          num: 11,
          numsvg: 'mark/J.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/j.png',
        },
        {
          name: "spade",
          num: 12,
          numsvg: 'mark/Q.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/q.png',
        },
        {
          name: "spade",
          num: 13,
          numsvg: 'mark/K.svg',
          type: "#B8845C",
          mark: 'icon-clover',
          src: 'F2E-2-picture/k.png',
        },
        {
          name: "heart",
          num: 1,
          numsvg: 'mark/A.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/a.png',
        },
        {
          name: "heart",
          num: 2,
          numsvg: 'mark/2.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/2.png',
        },
        {
          name: "heart",
          num: 3,
          numsvg: 'mark/3.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/3.png',
        },
        {
          name: "heart",
          num: 4,
          numsvg: 'mark/4.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/4.png',
        },
        {
          name: "heart",
          num: 5,
          numsvg: 'mark/5.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/5.png',
        },
        {
          name: "heart",
          num: 6,
          numsvg: 'mark/6.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/6.png',
        },
        {
          name: "heart",
          num: 7,
          numsvg: 'mark/7.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/7.png',
        },
        {
          name: "heart",
          num: 8,
          numsvg: 'mark/8.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/8.png',
        },
        {
          name: "heart",
          num: 9,
          numsvg: 'mark/9.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/9.png',
        },
        {
          name: "heart",
          num: 10,
          numsvg: 'mark/10.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/10.png',
        },
        {
          name: "heart",
          num: 11,
          numsvg: 'mark/J.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/j.png',
        },
        {
          name: "heart",
          num: 12,
          numsvg: 'mark/Q.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/q.png',
        },
        {
          name: "heart",
          num: 13,
          numsvg: 'mark/K.svg',
          type: "#E9BD5E",
          mark: 'icon-heart',
          src: 'F2E-2-picture/k.png',
        },
        {
          name: "diamond",
          num: 1,
          numsvg: 'mark/A.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/a.png',
        },
        {
          name: "diamond",
          num: 2,
          numsvg: 'mark/2.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/2.png',
        },
        {
          name: "diamond",
          num: 3,
          numsvg: 'mark/3.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/3.png',
        },
        {
          name: "diamond",
          num: 4,
          numsvg: 'mark/4.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/4.png',
        },
        {
          name: "diamond",
          num: 5,
          numsvg: 'mark/5.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/5.png',
        },
        {
          name: "diamond",
          num: 6,
          numsvg: 'mark/6.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/6.png',
        },
        {
          name: "diamond",
          num: 7,
          numsvg: 'mark/7.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/7.png',
        },
        {
          name: "diamond",
          num: 8,
          numsvg: 'mark/8.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/8.png',
        },
        {
          name: "diamond",
          num: 9,
          numsvg: 'mark/9.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/9.png',
        },
        {
          name: "diamond",
          num: 10,
          numsvg: 'mark/10.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/10.png',
        },
        {
          name: "diamond",
          num: 11,
          numsvg: 'mark/J.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/j.png',
        },
        {
          name: "diamond",
          num: 12,
          numsvg: 'mark/Q.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/q.png',
        },
        {
          name: "diamond",
          num: 13,
          numsvg: 'mark/K.svg',
          type: "#B8AD70",
          mark: 'icon-diamond',
          src: 'F2E-2-picture/k.png',
        },
        {
          name: "club",
          num: 1,
          numsvg: 'mark/A.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/a.png',
        },
        {
          name: "club",
          num: 2,
          numsvg: 'mark/2.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/2.png',
        },
        {
          name: "club",
          num: 3,
          numsvg: 'mark/3.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/3.png',
        },
        {
          name: "club",
          num: 4,
          numsvg: 'mark/4.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/4.png',
        },
        {
          name: "club",
          num: 5,
          numsvg: 'mark/5.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/5.png',
        },
        {
          name: "club",
          num: 6,
          numsvg: 'mark/6.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/6.png',
        },
        {
          name: "club",
          num: 7,
          numsvg: 'mark/7.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/7.png',
        },
        {
          name: "club",
          num: 8,
          numsvg: 'mark/8.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/8.png',
        },
        {
          name: "club",
          num: 9,
          numsvg: 'mark/9.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/9.png',
        },
        {
          name: "club",
          num: 10,
          numsvg: 'mark/10.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/10.png',
        },
        {
          name: "club",
          num: 11,
          numsvg: 'mark/J.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/j.png',
        },
        {
          name: "club",
          num: 12,
          numsvg: 'mark/Q.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/q.png',
        },
        {
          name: "club",
          num: 13,
          numsvg: 'mark/K.svg',
          type: "#917C65",
          mark: 'icon-spade',
          src: 'F2E-2-picture/k.png',
        }
      ],
      start: false,
      // win: false,
      hintOpen: false,
      loadingOpen: true,
      score: 0,
      //left-top box
      blankBoxes: [[], [], [], []],
      //right-top box
      standardBoxes: [[], [], [], []],
      //back box
      undoBox: [],
      // card array * 8
      cardBoxes: Array.from({ length: 8 }, () => []),
      //time
      timer: null,
      second: 0,
      minute: 0,
      moves: 0,
      //now take card
      target: null,
      //now take card box
      targetBoxes: null,
      restartGame: false,
      newGame: false
    },
    computed: {
      second() {
        return this.second < 10 ? "0" + this.second : this.second;
      },
      minute() {
        return this.minute < 10 ? "0" + this.minute : this.minute;
      },
    },
    mounted() {
      this.randomCards();
      this.dealCards();
      this.setTime();
      this.loadingPage();
    },
    methods: {
      randomCards() {
        this.cards.sort(() => {
          let num = Math.random() > 0.5 ? -1 : 1;
          return num;
        });
      },
      dealCards() {
        for (i = 0; i < this.cards.length; i++) {
          switch (i % 8) {
            case 0:
              this.cardBoxes[0].push(this.cards[i]);
              break;
            case 1:
              this.cardBoxes[1].push(this.cards[i]);
              break;
            case 2:
              this.cardBoxes[2].push(this.cards[i]);
              break;
            case 3:
              this.cardBoxes[3].push(this.cards[i]);
              break;
            case 4:
              this.cardBoxes[4].push(this.cards[i]);
              break;
            case 5:
              this.cardBoxes[5].push(this.cards[i]);
              break;
            case 6:
              this.cardBoxes[6].push(this.cards[i]);
              break;
            case 7:
              this.cardBoxes[7].push(this.cards[i]);
              break;
          }
        }
      },
      //timer
      setTime() {
        setTimeout(()=>{
          this.timer = setInterval(() => {
            if (this.second < 60) {
              this.second += 1;
            } else {
              this.second = 0;
              this.minute += 1;
            }
          }, 1000);
        },5000)
      },
      loadingPage() {
        setTimeout(()=>{
          this.loadingOpen = false;
        },3000)
      },
      // take array card
      dragFormBoxes(card, cardBox) {
        if (card.src !== cardBox[cardBox.length - 1].src || this.pause === true)
          return;
        this.target = card;
        this.targetBoxes = cardBox;
      },
      // card ary to left-top box
      dropToBlankBoxes(blankBox) {
        event.preventDefault();
        if (!this.target) return;
        if (blankBox.length < 1) {
          blankBox.push(this.target);
          this.targetBoxes.pop();
          this.target = null;
          this.moves += 1;
          this.score += 10;
          this.undoBox.push({
            from: this.targetBoxes,
            toBoxes: blankBox
          });
        }
      },
      //card to card ary
      dropToCardBoxes(cardBox) {
        event.preventDefault();
        let lastCard = cardBox[cardBox.length - 1];
        if (cardBox.length <= 0) {
          cardBox.push(this.target);
          this.targetBoxes.pop();
          this.target = null;
          this.moves += 1;
          this.score += 10;
          this.undoBox.push({
            from: this.targetBoxes,
            toBoxes: cardBox
          });
        } else {
          if (!this.target || this.target.type === lastCard.type) return;
          if (lastCard.num - 1 === this.target.num) {
            cardBox.push(this.target);
            this.targetBoxes.pop();
            this.target = null;
            this.moves += 1;
            this.undoBox.push({
              from: this.targetBoxes,
              toBoxes: cardBox
            });
          }
        }
      },
      //card to right-top box
      dropToStandardBoxes(standardBox) {
        event.preventDefault();
        let lastStandCard = standardBox[standardBox.length - 1];
        if (!this.target) return;
        if (standardBox.length === 0 && this.target.num === 1 ) {
          standardBox.push(this.target);
          this.targetBoxes.pop();
          this.target = null;
          this.moves += 1;
          this.score += 10;
          this.undoBox.push({
            from: this.targetBoxes,
            toBoxes: standardBox
          });
        } else {
          if (
            lastStandCard.num + 1 === this.target.num &&
            lastStandCard.name === this.target.name
          ) {
            standardBox.push(this.target);
            this.targetBoxes.pop();
            this.target = null;
            this.moves += 1;
            this.undoBox.push({
              from: this.targetBoxes,
              toBoxes: standardBox
            });
          }
        }
      },
      //上一步
      undo() {
        let lastUndo = this.undoBox[this.undoBox.length - 1];
        if (this.undoBox.length === 0) return;
        lastUndo.from.push(lastUndo.toBoxes[lastUndo.toBoxes.length - 1]);
        lastUndo.toBoxes.pop();
        this.undoBox.pop();
        this.moves -= 1;
        this.score -= 10;
      },
      stopDrop(e) {
        e.preventDefault();
      },
      //reset
      reset() {
        this.second = 0;
        this.minute = 0;
        this.moves = 0;
        this.target = null;
        this.targetBoxes = null;
        this.blankBoxes = [[], [], [], []];
        this.standardBoxes = [[], [], [], []];
      },
      //newGame
      playNewGame() {
        this.newGame = true;
        clearInterval(this.timer);
        this.reset();
        this.cardBoxes = Array.from({ length: 8 }, () => []);
        this.randomCards();
        this.dealCards();
        // this.win = false;
      },
      //restart this game
      restartThisGame() {
        this.restartGame = true;
        clearInterval(this.timer);
        this.reset();
        this.cardBoxes = Array.from({ length: 8 }, () => []);
        this.dealCards();
        // this.win = false;
      }
    }
  });
})(Vue);
