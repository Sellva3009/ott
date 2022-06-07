import styled from "styled-components";
import Slider from "react-slick";

function Banner() {
    const SlickSlider = styled.div`
        overflow: hidden;
      ${
        "" /* background: #030b17;
      border: 1px solid red;
      width: 100%;
      min-height: 400px;
      margin: 0 20px;
      color: #fff; */
      }
      .content-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #28344a;
        .content {
            padding: 35px 60px;
            color: #fff;
            h4.title {
                font-size: 25px;
                margin-bottom: 20px;
            }
            .category {
                margin-bottom: 20px;
            }
        }
      }
      img {
        display: block;
      }
    `;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "60px",
      autoplay: true,
      autoplaySpeed: 2000
    };

    return (
      <Slider {...settings} className="demo">
        <SlickSlider>
          <div className="content-wrap">
            <div className="content">
              <h4 className="title">Lorem ipsum dolor sit amet.</h4>
              <div className="category">
                <span>Drama</span>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                atque enim ex dolorum vero autem consectetur beatae laudantium
                esse deleniti.
              </div>
            </div>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/71/1240071-h-c87e8b0bf1e5"
              alt=""
            />
          </div>
        </SlickSlider>
        <SlickSlider>
          <div className="content-wrap">
            <div className="content">
              <h4 className="title">Lorem ipsum dolor sit amet.</h4>
              <div className="category">
                <span>Drama</span>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                atque enim ex dolorum vero autem consectetur beatae laudantium
                esse deleniti.
              </div>
            </div>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/71/1240071-h-c87e8b0bf1e5"
              alt=""
            />
          </div>
        </SlickSlider>
        <SlickSlider>
          <div className="content-wrap">
            <div className="content">
              <h4 className="title">Lorem ipsum dolor sit amet.</h4>
              <div className="category">
                <span>Drama</span>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                atque enim ex dolorum vero autem consectetur beatae laudantium
                esse deleniti.
              </div>
            </div>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/71/1240071-h-c87e8b0bf1e5"
              alt=""
            />
          </div>
        </SlickSlider>
        <SlickSlider>
          <div className="content-wrap">
            <div className="content">
              <h4 className="title">Lorem ipsum dolor sit amet.</h4>
              <div className="category">
                <span>Drama</span>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                atque enim ex dolorum vero autem consectetur beatae laudantium
                esse deleniti.
              </div>
            </div>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/71/1240071-h-c87e8b0bf1e5"
              alt=""
            />
          </div>
        </SlickSlider>
        <SlickSlider>
          <div className="content-wrap">
            <div className="content">
              <h4 className="title">Lorem ipsum dolor sit amet.</h4>
              <div className="category">
                <span>Drama</span>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                atque enim ex dolorum vero autem consectetur beatae laudantium
                esse deleniti.
              </div>
            </div>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/71/1240071-h-c87e8b0bf1e5"
              alt=""
            />
          </div>
        </SlickSlider>
        <SlickSlider>
          <div className="content-wrap">
            <div className="content">
              <h4 className="title">Lorem ipsum dolor sit amet.</h4>
              <div className="category">
                <span>Drama</span>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                atque enim ex dolorum vero autem consectetur beatae laudantium
                esse deleniti.
              </div>
            </div>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/71/1240071-h-c87e8b0bf1e5"
              alt=""
            />
          </div>
        </SlickSlider>
        <SlickSlider>
          <div className="content-wrap">
            <div className="content">
              <h4 className="title">Lorem ipsum dolor sit amet.</h4>
              <div className="category">
                <span>Drama</span>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                atque enim ex dolorum vero autem consectetur beatae laudantium
                esse deleniti.
              </div>
            </div>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/71/1240071-h-c87e8b0bf1e5"
              alt=""
            />
          </div>
        </SlickSlider>
      </Slider>
    );
}

export default Banner;