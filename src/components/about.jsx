import './about.css';
import { FaTree } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
function About(){
    return(
        <>
        <section id='About'>
        <div className='Gradient'>
        <div className='sun'>
            <FaSun />
                </div>
            <div className='COntainer'>
            <div className='card' >
           <h1>Test</h1>
           <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat amet perferendis, consequatur asperiores perspiciatis praesentium sit debitis doloremque velit nam sequi error aspernatur odit iste veritatis accusantium porro quas, ratione voluptatem, eos corporis autem possimus minima. Ipsam beatae voluptas nisi molestias ipsa facere quos possimus laboriosam, facilis libero laborum!</h3>
          </div>
          <div className='card' >
           <h1>Test</h1>
           <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo debitis, dicta sit veniam tempora, odit enim quod, deserunt nulla qui unde hic voluptatibus totam velit. Illo ducimus delectus eum error soluta, veniam sint. Maxime mollitia, quibusdam officiis quaerat fugit amet.</h3>
          </div>
          <div className='card' >
           <h1>Test</h1>
           <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores soluta, reprehenderit accusamus, earum enim quam doloremque iusto assumenda alias dolor! Alias fugiat perferendis repellendus cupiditate ipsam atque quidem, facilis nesciunt cum quos impedit soluta voluptate, consequatur quam? Tempore sunt ea in provident repellendus minima?</h3>
          </div>

           
            </div>
            <div className='iconify'>
            <div className='iconscontainer'>
            <FaTree />
            </div>
            <div className='iconscontainer1'>
            <FaTree />
            </div>
            <div className='iconscontainer2'>
            <FaTree />
            </div>
            <div className='iconscontainer3'>
            <FaTree />
            </div>
            <div className='iconscontainer4'>
            <FaTree />
            </div>
            </div>

            </div>
        </section>

        </>
    )
}
export default About;