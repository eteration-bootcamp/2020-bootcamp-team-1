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
