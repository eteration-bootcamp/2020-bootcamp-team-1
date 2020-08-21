# State Design Pattern
Bir nesnenin durumu deðiþtirildiðinde davranýþýnýn deðiþtirildiði tasarým deseni.

### Power interface
Power interface ile davranýþý belirliyoruz.
```
public interface Power {
	public void keyPress();
}
```
### On State
On state bilgisiyarýn açýk olma durumu
```
public class On implements Power {
	@Override
	public void keyPress() {
		System.out.println("Bilgisayar açýlýyor");
	}
}
```
### Of State
Of State bilgisayarýn kapalý olma durumu
```
public class Off implements Power {
	@Override
	public void keyPress() {
		System.out.println("Bilgisayar kapanýyor");
	}
}
```
### Computer Class
Computer Sýnýfýnda bilgisayarýn durumunun deðiþtirilmesi keyPress fonksiyonlarý çaðýrýlýnda gerçekleþiyor.
Açýk ise kapatýlýyor ve kapalý ise açýk durumuna getiriliyor.
```
public class Computer {

	public Power power;

	public Computer() {
		this.power = new Off();
	}

	public void keyPress() {
		power.keyPress();
	}

	public void turnOfComputer() {
		System.out.println("Power tuþuna basýldý !");
		power = new Off();
	}

	public void turnOnComputer() {
		System.out.println("Power tuþuna basýldý !");
		power = new On();
	}
}

```


