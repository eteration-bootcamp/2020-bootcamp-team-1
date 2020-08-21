# Memento Tasarım Deseni

Memento tasarım deseni adı üzerinde "hatıra" anlamına gelmektedir. Yani hatırlayıcı bir işlev gören tasarım desenidir.Mevcut nesnesini bir T anındaki durumunu kayda alarak daha sonradan kullanmamızı sağlayan bir desendir.Tasarladığım küçük uygulamada 5 sınıf bulunmakta.

  - Game sınıfı -> Bu sınıf durumu tutulacak olan nesnemiz olmakta. Kaynaklarda originator olarakta geçmekte. Sınıfın eski ve yeni haline erişmemizi sağlayacak metodlar bu sınıfta bulunacaklar.
  - Memento sınıfı -> Bu sınıf, asıl nesnemizdeki özellikleri tutmamızı sağlayacak olan sınıftır.
  - CareTaker sınıfı -> Geri dönüş noktalarımızı memento sınıfı cinsinden tutacak sınıftır.
  - Visual sınıfı -> Uygulamamızı daha net anlamak için tasarlanan sınıf. Tasarım kalıbıyla bir ilgisi yok.
  - Test sınıfı -> Uygulamanın ve tasarım desenenin nasıl çalıştığını test ettiğimiz sınıf.

### Game.java
Bu sınıf durumu tutulacak olan nesnemiz olmakta.
```java
    private int player1Score;
    private int[] player1Coordinate; // x,y şeklinde
    private int player2Score;
    private int[] player2Coordinate; // x,y şeklinde
    private int[] ballCoordinate;    // x,y şeklinde
```
şeklinde sınıfımızın özellikleri bulunmakta.

```java
    public Memento saveGameToMemento(){
        return new Memento(player1Score,player1Coordinate,player2Score,player2Coordinate,ballCoordinate);
    }
```
anlık olarak sınıfın özelliklerini tutan ve saklayan metod.

```java
    public void getGameFromMemento(Memento memento){
        player1Score = memento.getPlayer1Score();
        player1Coordinate = memento.getPlayer1Coordinate();
        player2Score = memento.getPlayer2Score();
        player2Coordinate = memento.getPlayer2Coordinate();
        ballCoordinate = memento.getBallCoordinate();
    }
```
kaydedilmiş özellikleri getiren ve sınıfa atayan metod.

### Memento.java
Bu sınıf, asıl nesnemizdeki özellikleri tutmamızı sağlayacak olan sınıf.
```java
public class Memento {
    private int player1Score;
    private int[] player1Coordinate;

    private int player2Score;
    private int[] player2Coordinate;

    private int[] ballCoordinate;

    public Memento(int player1Score, int[] player1Coordinate, int player2Score, int[] player2Coordinate, int[] ballCoordinate) {
        this.player1Score = player1Score;
        this.player1Coordinate = player1Coordinate;
        this.player2Score = player2Score;
        this.player2Coordinate = player2Coordinate;
        this.ballCoordinate = ballCoordinate;
    }
}
```

### CareTaker.java
İçinde bulununa memento nesnelerini tutan listeden istenen nesneyi döndüren ve verilen nesneyi kaydeden sınıf.
```java
public class CareTaker {
    private static int saveGameId = 1;
    private List<Memento> mementoList = new ArrayList<Memento>();

    public CareTaker() {
    }

    public void add(Memento state){
        System.out.println("Save Game(id: "+saveGameId+")\n");
        mementoList.add(state);
        saveGameId++;
    }

    public Memento get(int index){
        System.out.println("Load Game(id: "+index+")\n");
        return mementoList.get(index);
    }
}
```

### Test.java
```java
public class Test {
    public static void main(String[] args) {

        Game game = new Game();
        CareTaker careTaker = new CareTaker();
        Visual visual = new Visual();

        //oyunun temsili olarak başlatıldığı oyuncu konumları ve skorları
        game.setPlayer1Score(3);
        game.setPlayer1Coordinate(new int[]{5, 0});

        game.setPlayer2Score(7);
        game.setPlayer2Coordinate(new int[]{9, 12});

        game.setBallCoordinate(new int[]{5, 4});

        //oyunun konsolda görselleştirilmesi
        visual.boardView(game);

        //oyunun kaydının alınması
        careTaker.add(game.saveGameToMemento());

        //oyunundaki yeni değerler
        game.setPlayer1Score(5);
        game.setPlayer1Coordinate(new int[]{3, 0});

        game.setPlayer2Coordinate(new int[]{5, 12});

        game.setBallCoordinate(new int[]{7, 2});
        //oyunun konsolda görselleştirilmesi
        visual.boardView(game);

        //oyunun kaydının alınması
        careTaker.add(game.saveGameToMemento());

        //oyunundaki yeni değerler
        game.setPlayer1Score(8);
        game.setPlayer1Coordinate(new int[]{7, 0});

        game.setPlayer2Score(10);
        game.setPlayer2Coordinate(new int[]{1, 12});

        game.setBallCoordinate(new int[]{5, 3});
        //oyunun konsolda görselleştirilmesi
        visual.boardView(game);

        //oyunun kaydının alınması
        careTaker.add(game.saveGameToMemento());

        //kayıtların tekrar getirilmesi ve görselleştirilmesi
        game.getGameFromMemento(careTaker.get(0));
        visual.boardView(game);

        game.getGameFromMemento(careTaker.get(1));
        visual.boardView(game);

        game.getGameFromMemento(careTaker.get(2));
        visual.boardView(game);
    }
}
```


### Konsol
```sh
Player-1(Left)  Score: 3
Player-1(Right) Score: 7
Save Game(id: 1)

Player-1(Left)  Score: 5
Player-1(Right) Score: 7
Save Game(id: 2)

Player-1(Left)  Score: 8
Player-1(Right) Score: 10
Save Game(id: 3)

Load Game(id: 0)
Player-1(Left)  Score: 3
Player-1(Right) Score: 7

Load Game(id: 1)
Player-1(Left)  Score: 5
Player-1(Right) Score: 7

Load Game(id: 2)
Player-1(Left)  Score: 8
Player-1(Right) Score: 10
```

