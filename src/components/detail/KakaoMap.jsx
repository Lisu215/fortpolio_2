/*global kakao */
import React, { useEffect } from "react";

const KakaoMap = (props) => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(props.mapy, props.mapx),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(props.mapy, props.mapx);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    var infowindow = new kakao.maps.InfoWindow({
      content:
        '<div style="width:150px;text-align:center;padding:6px 0;">' +
        props.addr2 +
        "</div>",
    });
    infowindow.open(map, marker);
    marker.setMap(map);
  }, [props.mapx]);

  return (
    <div>
      <div id="map" style={{ width: "485px", height: "370px" }}></div>
    </div>
  );
};

export default KakaoMap;
