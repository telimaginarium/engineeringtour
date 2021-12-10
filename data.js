var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.22083757882377242,
        "pitch": 0.11373542942433623,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.03876213452341304,
          "pitch": -0.25209313244066855,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7910515711482837,
          "pitch": -0.03723965706543453,
          "title": "Faculty of Engineering",
          "text": "Welcome to the Faculty of Engineering!&nbsp;"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.15903032259653926,
        "pitch": -0.1924893490670918,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -1.8328774239886538,
          "pitch": -0.11090467971743934,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.19936861251211546,
          "pitch": 0.038336957848146724,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7371266804587577,
          "pitch": 0.034922302027105445,
          "title": "Engineering Auditorium",
          "text": "This is the engineering auditorium where lectures are held. There are seats outside for students to study at as well as a cafe for a quick pick-me-up. Yum!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.6007744194524047,
        "pitch": 0.01460160295725288,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -3.118787826477348,
          "pitch": -0.051698684592977884,
          "rotation": 3.9269908169872414,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.12821064053218834,
          "pitch": 0.28694617070511974,
          "title": "Engineering Atrium",
          "text": "The coffee is great and the place is air-conditioned!"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
