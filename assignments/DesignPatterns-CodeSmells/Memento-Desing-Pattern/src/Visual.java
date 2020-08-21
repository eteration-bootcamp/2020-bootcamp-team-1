import java.util.Arrays;

public class Visual {
    public String[][] board = new String[10][13];

    //oyunu konsolda temsili olarak görselleştiren metod
    public void boardView(Game game){
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                board[i][j] = " " ;
            }
        }

        board[game.getBallCoordinate()[0]][game.getBallCoordinate()[1]] = "O";
        board[game.getPlayer1Coordinate()[0]][game.getPlayer1Coordinate()[1]] = "|";
        board[game.getPlayer2Coordinate()[0]][game.getPlayer2Coordinate()[1]] = "|";

        for (String[] row : board){
            System.out.println(Arrays.toString(row));
        }

        System.out.println("Player-1(Left)  Score: "+game.getPlayer1Score());
        System.out.println("Player-1(Right) Score: "+game.getPlayer2Score()+"\n");


    }
}
