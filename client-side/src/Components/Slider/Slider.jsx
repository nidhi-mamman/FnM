import './Slider.css';
import OwlCarousel from 'react-owl-carousel';
import slider1 from '../../assets/slider1.jpeg';
import slider2 from '../../assets/slider2.jpeg';
import slider3 from '../../assets/slider3.jpeg';
import slider4 from '../../assets/slider4.jpeg';
import slider5 from '../../assets/slider5.jpeg';
import slider6 from '../../assets/Slider6.jpeg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider = () => {
    const options = {
        items: 4,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        slideBy: 2,
        stagePadding: 0,
        autoWidth: false,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            },
            1500: {
                items: 4
            }
        }
    }
    return (
        <>
            <div className="container-section">
                <h1 className='text-5xl font-bold text-red-600'>Glimpses</h1>
                <OwlCarousel className='owl-theme' {...options}>
                    <div className='item'>
                        <img src={slider1} alt="" />
                    </div>
                    <div className='item'>
                        <img src={slider2} alt="" />
                    </div>
                    <div className='item'>
                        <img src={slider3} alt="" />
                    </div>
                    <div className='item'>
                        <img src={slider4} alt="" />
                    </div>
                    <div className='item'>
                        <img src={slider6} alt="" />
                    </div>
                    <div className='item'>
                        <img src={slider5} alt="" />
                    </div>
                </OwlCarousel>
            </div>
        </>
    )
}

export default Slider