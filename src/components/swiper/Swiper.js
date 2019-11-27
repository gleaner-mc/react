import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import banner1 from '../../assets/img/banner/banner1.jpg'
import banner2 from '../../assets/img/banner/banner2.jpg'
import banner3 from '../../assets/img/banner/banner3.jpg'
export default class Swiper extends React.Component{
    
        state = {
            data: [],
            imgHeight: 176,
          };
          componentDidMount(){
            // simulate img loading
            setTimeout(() => {
              this.setState({
                data: [banner1, banner2, banner3],
              });
            }, 100);
          }
          render(){
            
        return(
            <div className="banner">
                
        <Carousel
          autoplay={true}
          infinite
          
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`${val}`}
                
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      
            </div>
        )
    }
}