import React from "react";
import LeadSpace from "../LeadSpace";
import VideoBlock from "../VideoBlock";
import ImageBlock from "../ImageBlock";
import Inverse from "../Inverse";
import SectionHeading from "../SectionHeading";
import TextBlock from "../TextBlock";
import Layer from "../Layer";
import "./_plotter.scss";

const Plotter = () => {
	return (
		<div className="plotter">
			<Inverse>
				<LeadSpace heading="Vertical Plotter"></LeadSpace>
			</Inverse>
			<section className="video-block__container">
				<VideoBlock src="https://player.vimeo.com/video/474780978?h=c6218ff937" />
			</section>
			<section>
				<TextBlock layout="feature">
					This project began with a blank canvas: a big, empty wall in my apartment. My goal was to create a robot with the ability to draw on a large hanging whiteboard. Recognizing the added complexity and cost of starting at such a large scale, I opted to first create a smaller machine using parts I had on hand. This would also allow me to learn and iterate rapidly.
				</TextBlock>
			</section>
			<Layer>
				<section>
					<SectionHeading>Approach</SectionHeading>
					<ImageBlock
						layout="left"
						copy=<div><p>The plotter relies on two stepper motors, each with the ability to wind and unwind a thread tied to their axles. Dangling between the two threads is the pen, which uses a door hinge to maintain a consistent angle against the paper. By applying the Pythagorean theorem to the triangle formed between the stepper motors and the pen, one can control the pen’s motion by winding the thread and changing the triangle’s side lengths."</p>
							<p>While I was finding a way to fill areas without lifting the pen, I learned about the Hilbert curve, a type of space-filling algorithm. One helpful property of this curve is that points that are near to each other in the 2d plane are also near to each other along the line (and time, as a result). This means that gradual changes during drawing, such as thread tension or pen position, are less noticeable.</p>
						</div>
					>
						<img src="https://uploads-ssl.webflow.com/5ee3b848add438e19c2a0cc4/5fa063fc2cf33a153db25111_IMG_0865%202-p-1600.jpeg" />
					</ImageBlock>
					<ImageBlock
						layout="right"
						copy="Armed with this new algorithm, the pen followed a Hilbert curve-shaped path through the canvas. At each corner, it checked the four surrounding pixels in the image. If a pixel was black, it drew a box over it. If it was grey, it drew a diagonal line. White pixels were ignored. Once the surrounding pixels had been properly shaded, the pen continued to the next corner and repeated until every pixel had been examined. This method produced striking results with dramatic contrast and mesmerizing patterns."
					>
						<img src="https://i.imgur.com/gEdcVUe.jpg" />
					</ImageBlock>
					<ImageBlock
						layout="left"
						copy="Still, this technique required that the images be reduced to three-shade grayscale images, with a maximum resolution of 128x128 px. Without the ability to shade gradients, each photo must be carefully adjusted to achieve recognizable results. I reached out to Piter Pasma, an artist experimenting with similar methods. He suggested using a smoothing function, taking advantage of the fact that the result of smoothing a finer, darker Hilbert curve is a coarser, lighter one. Because the smoothing coefficient is continuous, it is possible to draw gradients. The line does not double back or cross itself, giving the viewer a glimpse at how a drawing is created."
					>
						<img src="https://i.imgur.com/e2uE9yC.png" />
					</ImageBlock>
				</section>
			</Layer>
			<section>
				<SectionHeading>Result</SectionHeading>
				<ImageBlock layout="feature">
					<img src="https://i.imgur.com/AeFxXsE.png"/>
				</ImageBlock>
				<TextBlock layout="left">I was very happy with the pieces I was able to create, and decided to think about my original goal: the huge whiteboard bot. This version could be more conventionally useful if programmed to draw murals, sync to a to-do list, or write a word of the day. However, I believe the greatest benefit of the plotter is the way it helps me learn. I had moments where something in a Wikipedia article suddenly made sense after seeing it drawn out. My next goal is to incorporate color using a solution to the traveling salesman problem, and to 3d print a model of a hand to replace the door hinge. It may never end up on a whiteboard, but it will keep getting better as I, and the robot, learn more.</TextBlock>
			</section>	
		</div>

	);
};

export default Plotter;
