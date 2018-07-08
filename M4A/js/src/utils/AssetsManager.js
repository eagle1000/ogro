    var AssetsManager = function () {
        this.imagesGeneral = [
            {resource: serverPath + 'assets/images/darkness.png', name: "darkness"},
            {resource: serverPath + 'assets/images/background_final.png', name: "background_final"},
            {resource: serverPath + 'assets/images/tp.png', name: "tp"}
        ];

        this.atlas = [
            { name: "backgrounds", img:"backgrounds.png", json: "backgrounds.json"},
            { name: "answers_lvl_a", img:"answers_lvl_a.png", json: "answers_lvl_a.json"},
            { name: "answers_lvl_b", img:"answers_lvl_b.png", json: "answers_lvl_b.json"},
            { name: "answers_lvl_c", img:"answers_lvl_c.png", json: "answers_lvl_c.json"},
            { name: "level_a", img:"level_a.png", json: "level_a.json"},
            { name: "level_b", img:"level_b.png", json: "level_b.json"},
            { name: "level_c", img:"level_c.png", json: "level_c.json"},
            { name: "dots00", img:"dots00.png", json: "dots00.json"},
            { name: "dots01", img:"dots01.png", json: "dots01.json"},
            { name: "dots02", img:"dots02.png", json: "dots02.json"},
            { name: "miss_paola", img:"miss_paola.png", json: "miss_paola.json"},
            { name:"ogrodancing00", img: "ogrodancing00.png", json: "ogrodancing00.json"},
            { name:"ogrodancing01", img: "ogrodancing01.png", json: "ogrodancing01.json"},
            { name:"ogrodancing02", img: "ogrodancing02.png", json: "ogrodancing02.json"},
            { name:"ogrofixing00", img: "ogrofixing00.png", json: "ogrofixing00.json"},
            { name:"ogrofixing01", img: "ogrofixing01.png", json: "ogrofixing01.json"},
            { name:"ogroidle00", img: "ogroidle00.png", json: "ogroidle00.json"},
            { name:"ogroidle01", img: "ogroidle01.png", json: "ogroidle01.json"},
            { name:"ogroscratching00", img: "ogroscratching00.png", json: "ogroscratching00.json"},
            { name:"ogroscratching01", img: "ogroscratching01.png", json: "ogroscratching01.json"}
        ];

        this.audios =[
            {
                name:"prompt_atlas",
                src: serverPath + "assets/audios/prompt_atlas",
                frames: [
                    { id : 0, name : 'congratulate1', from : 0, to : 1.442 },
                    { id : 1, name : 'congratulate2', from : 1.442, to : 1.200 },
                    { id : 2, name : 'congratulate3', from : 2.642, to : 0.988 },
                    { id : 3, name : 'congratulate4', from : 3.630, to : 1.300 },
                    { id : 4, name : 'prompt', from : 4.930, to : 2.883 }, 
                    { id : 5, name : 'shape0', from : 7.813, to : 0.760 }, //Circulo
                    { id : 6, name : 'shape1', from : 8.573, to : 0.680 }, //Cuadro
                    { id : 7, name : 'shape2', from : 9.253, to : 0.840 }, //Rectangulo
                    { id : 8, name : 'shape3', from : 10.093, to : 0.780 }, //Triang
                    { id : 9, name : 'shape4', from : 10.873, to : 0.501 }, //Ovalo
                    { id : 10, name : 'title', from : 11.374, to : 3.441 }
                ]
            },
            {
                name:"effect_atlas",
                src: serverPath + "assets/audios/effect_atlas",
                frames: [
                    { id : 0, name : 'btnNavigation', from : 0, to : 0.136 },
                    { id : 1, name : 'btnSelection', from : 0.136, to : 0.170 },
                    { id : 2, name : 'effectTokens', from : 0.306, to : 2.5 },
                    { id : 3, name : 'explosion', from : 2.806, to : 2.2 },
                    { id : 4, name : 'ogreLaughter', from : 5.006, to : 1.06 },
                    { id : 5, name : 'ogreWorking', from : 6.066, to : 1.488 },
                    { id : 6, name : 'vehicleEntry', from : 7.554, to : 1.569 },
                    { id : 7, name : 'vehicleExit', from : 9.123, to : 3.250 },
                    { id : 8, name : 'ogreScratch', from : 12.373, to : 0.311 }
                ]
            }
        ];
        
    };



