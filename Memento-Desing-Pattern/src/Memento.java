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

    public int getPlayer1Score() {
        return player1Score;
    }

    public int[] getPlayer1Coordinate() {
        return player1Coordinate;
    }

    public int getPlayer2Score() {
        return player2Score;
    }

    public int[] getPlayer2Coordinate() {
        return player2Coordinate;
    }

    public int[] getBallCoordinate() {
        return ballCoordinate;
    }
}
