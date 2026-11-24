var APP_DATA = {
  "scenes": [
    {
      "id": "0-2jpg",
      "name": "2.jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5288103192750917,
          "pitch": 0.11799617143510233,
          "rotation": 0,
          "target": "1-ambiente_felicidadjpg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ambiente_felicidadjpg",
      "name": "ambiente_felicidad.jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0973294913774847,
          "pitch": 0.05075077891524771,
          "rotation": 0,
          "target": "2-ambientacion_calma_con_gentejpg"
        },
        {
          "yaw": -0.08149456936944333,
          "pitch": -0.03196860288651493,
          "rotation": 0,
          "target": "0-2jpg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ambientacion_calma_con_gentejpg",
      "name": "ambientacion_calma_con_gente.jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9712804453064514,
          "pitch": 0.09919469485700283,
          "rotation": 0,
          "target": "1-ambiente_felicidadjpg"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
