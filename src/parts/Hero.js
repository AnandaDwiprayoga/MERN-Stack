import React from "react";

import ImageHero from "assets/images/img-hero.png";
import ImageHeroFrame from "assets/images/img-frame-hero.png";
import IconTreasure from "assets/images/icon/icon-camera.svg";
import IconTravel from "assets/images/icon/icon-koper.svg";
import IconCities from "assets/images/icon/icon-location.svg";
import Button from "elements/button";

import formatNumber from "utilities/NumberFormat";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 560 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <div
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </div>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>

          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                src={IconTravel}
                alt={`${props.data.travelers} travelers`}
                width="30"
                height="30"
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>

            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                src={IconTreasure}
                alt={`${props.data.treasures} treasures`}
                width="30"
                height="30"
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>

            <div className="col-auto">
              <img
                src={IconCities}
                alt={`${props.data.cities} cities`}
                width="30"
                height="30"
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt="Img Hero"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />

            <img
              src={ImageHeroFrame}
              alt="Img Hero Frame"
              className="img-fluid position-absolute"
              style={{ margin: "10px 0 0 10px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
