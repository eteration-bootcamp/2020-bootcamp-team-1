public class Game {
    private int player1Score;
    private int[] player1Coordinate; // x,y şeklinde

    private int player2Score;
    private int[] player2Coordinate; // x,y şeklinde

    private int[] ballCoordinate; // x,y şeklinde


    public Game() {

    }

    // anlık olarak sınıfın özelliklerini tutan ve saklayan metod
    public Memento saveGameToMemento(){
        return new Memento(player1Score,player1Coordinate,player2Score,player2Coordinate,ballCoordinate);
    }

    // kaydedilmiş özellikleri getiren ve sınıfa atayan metod
    public void getGameFromMemento(Memento memento){
        player1Score = memento.getPlayer1Score();
        player1Coordinate = memento.getPlayer1Coordinate();
        player2Score = memento.getPlayer2Score();
        player2Coordinate = memento.getPlayer2Coordinate();
        ballCoordinate = memento.getBallCoordinate();
    }

    public int getPlayer1Score() {
        return player1Score;
    }

    public void setPlayer1Score(int player1Score) {
        this.player1Score = player1Score;
    }

    public int[] getPlayer1Coordinate() {
        return player1Coordinate;
    }

    public void setPlayer1Coordinate(int[] player1Coordinate) {
        this.player1Coordinate = player1Coordinate;
    }

    public int getPlayer2Score() {
        return player2Score;
    }

    public void setPlayer2Score(int player2Score) {
        this.player2Score = player2Score;
    }

    public int[] getPlayer2Coordinate() {
        return player2Coordinate;
    }

    public void setPlayer2Coordinate(int[] player2Coordinate) {
        this.player2Coordinate = player2Coordinate;
    }

    public int[] getBallCoordinate() {
        return ballCoordinate;
    }

    public void setBallCoordinate(int[] ballCoordinate) {
        this.ballCoordinate = ballCoordinate;
    }

}
