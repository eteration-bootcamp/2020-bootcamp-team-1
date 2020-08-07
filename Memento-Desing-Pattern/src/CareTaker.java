import java.util.ArrayList;
import java.util.List;

public class CareTaker {
    // kaçıncı kayıt olduğunu tutmak için tanımladığım değer
    private static int saveGameId = 1;

    // kayıtları tutan liste
    private List<Memento> mementoList = new ArrayList<Memento>();

    public CareTaker() {

    }

    //yeni kaydı listeye atayan metod
    public void add(Memento state){
        System.out.println("Save Game(id: "+saveGameId+")\n");
        mementoList.add(state);
        saveGameId++;
    }

    //listedeki kaydı getiren metod
    public Memento get(int index){
        System.out.println("Load Game(id: "+index+")\n");
        return mementoList.get(index);

    }
}
