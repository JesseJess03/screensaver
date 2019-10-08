let x_position = 0 //Declaring the variable 
let y_position = 0
let x_direction = "right"
let y_direction = "down"
let speed = 3
let diameter = 50
let angle = 0 


function setup() { //Laying the ground work 

	createCanvas(1350, 700)
	x_position = random(0, width)
	y_position = random(0, height)
	angleMode(DEGREES)


}

function draw() { //Repeats every 30 frames. Draws over and over again 

	background(255, 255, 255) //Sets background color to white 

	// strokeWeight(5) //Thickness of the line 
	// noStroke()
	// line(x_position, 0, x_position, height)




	ellipse(x_position, y_position, diameter, diameter) //Draws a circle given initial coordinates
	strokeWeight(6)
	arc(x_position, y_position, diameter,  diameter, angle, angle+10, PIE) 
	angle += 0

	rect(450, 70, 550, 550)

	rect(450, 70, 540, 540)

	rect(450, 70, 530, 530)

	rect(450, 70, 520, 520)

	rect(450, 70, 510, 510)

	rect(450, 70, 500, 500)

	rect(450, 70, 490, 490)

	rect(450, 70, 480, 480)

	rect(450, 70, 470, 470)

	rect(450, 70, 460, 460)

	rect(450, 70, 450, 450)

	rect(450, 70, 440, 440)

	rect(450, 70, 430, 430)

	rect(450, 70, 420, 420)

	rect(450, 70, 410, 410)

	rect(450, 70, 400, 400)

	rect(450, 70, 390, 390)

	rect(450, 70, 380, 380)

	rect(450, 70, 370, 370)

	rect(450, 70, 360, 360)

	rect(450, 70, 350, 350)

	rect(450, 70, 340, 340)

	rect(450, 70, 330, 330)

	rect(450, 70, 320, 320)

	rect(450, 70, 310, 310)

	rect(450, 70, 300, 300)

	rect(450, 70, 290, 290)

	rect(450, 70, 280, 280)

	rect(450, 70, 280, 280)

	rect(450, 70, 270, 270)

	rect(450, 70, 260, 260)

	rect(450, 70, 250, 250)

	rect(450, 70, 240, 240)

	rect(450, 70, 230, 230)

	rect(450, 70, 220, 220)

	rect(450, 70, 210, 210)

	rect(450, 70, 200, 200)

	rect(450, 70, 190, 190)

	rect(450, 70, 180, 180)

	rect(450, 70, 170, 170)

	rect(450, 70, 160, 160)

	rect(450, 70, 150, 150)

	rect(450, 70, 140, 140)

	rect(450, 70, 130, 130)

	rect(450, 70, 120, 120)

	rect(450, 70, 110, 110)

	rect(450, 70, 100, 100)

	rect(450, 70, 90, 90)

	rect(450, 70, 80, 80)

	rect(450, 70, 70, 70)

	rect(450, 70, 60, 60)

	rect(450, 70, 50, 50)

	rect(450, 70, 40, 40)

	rect(450, 70, 30, 30)

	rect(450, 70, 20, 20)

	rect(450, 70, 10, 10)




















	if (x_direction == "right") { //Reason for why it moves
		x_position += speed


	} //Varibale direction is set to right, the line start variable we add one to it. This is what actually makes it go right 

	if (x_direction == "left") { //Comparing a string and another string
		x_position -= speed

	}

	if (y_direction == "down") {
		y_position += speed
	}	

	if (y_direction == "up") {
		y_position -= speed
	}


	//Right wall
	if (x_position >= width - diameter/2) { //This is one is acutally doing math 
		x_direction = "left"
		stroke(random(0, 255), random(0, 255), random(0, 255))  
	}
	//Left wall
	if (x_position <= 0 + diameter/2) {
		x_direction = "right"
		stroke(random(0, 255), random(0, 255), random(0, 255)) 
	}

	//Bottom wall
	if (y_position >= height - diameter/2) {
		y_direction = "up"
		stroke(random(0, 255), random(0, 255), random(0, 255))
	}

	//Top wall 
	if (y_position <= 0 + diameter/2) {
		y_direction = "down"
		stroke(random(0, 255), random(0, 255), random(0, 255))
	}

	push()
	noFill()
	strokeWeight(1)
	stroke(0)
	rect(0, 0, width, height)
	pop()

}
