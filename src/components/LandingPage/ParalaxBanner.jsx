import './LandingPage.css';
import { ParallaxBanner } from 'react-scroll-parallax';

function ParalaxBanner(){
    const background = {
        image:
          'Images/Background.jpeg',
        speed: -40,
        translateY: [0, 50],
        shouldAlwaysCompleteAnimation: true,
      };
    
      const middleground = {
        image:
          'Images/middleground.png',
        speed: -20,
        scale: [1, 1.1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
      };
    
      const foreground = {
        image:
          'Images/foreground.png',
        speed: 20,
        translateY: [0, 15],
        scale: [1, 1.1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
      };
    
      const headline = {
        scale: [1, 1.05, 'easeOutCubic'],
        expanded: false,
        children: (
            <h1 className="welcome_title">Welcome</h1>
        ),
      };

    return(
        <ParallaxBanner
            layers={[background, middleground, foreground, headline]}
            className="paralax"
          />
    )
}

export default ParalaxBanner