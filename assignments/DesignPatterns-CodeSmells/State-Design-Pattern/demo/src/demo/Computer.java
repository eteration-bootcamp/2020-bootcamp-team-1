package demo;

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
