    var LevelManager = function () {

        this.data = [
            {
                id: 0,
                atlas:'level_a',
                name: 'car00', 
                frame: ['car00'],
                position: {x: 40, y: 230},
                dots: [ 
                    {
                        atlas: 'dots00',
                        name: 'circle00',
                        frames: ['circle00', 'circle01', 'circle03'],
                        position: { x: 290, y: 685 },
                        scale: { x: 0.32, y: 0.32 },
                        angle: 0
                    },
                    {
                        atlas: 'dots01',
                        name: 'square00',
                        frames: ['square00', 'square01', 'square03'],
                        position: { x: 470, y: 470 },
                        scale: { x: 0.38, y: 0.34 },
                        angle: 0
                    }
                ],
                options: [
                    {
                        answerc: {
                            id: 0, atlas: 'answers_lvl_a', frames: ['tireCircle00', 'tireCircle01'], name: 'tireCircle00', prefix: 'tire03', audio: 'shape0', iscorrect: true 
                        } ,

                        answer: [
                            { id: 1, atlas: 'answers_lvl_a', frames: ['tireOval00', 'tireOval01'], name: 'tireOval00', prefix: 'tire02', audio: 'shape4', iscorrect: false },
                            { id: 2, atlas: 'answers_lvl_a', frames: ['tireRectangle00', 'tireRectangle01'], name: 'tireRectangle00', prefix: 'tire01', audio: 'shape2', iscorrect: false },
                            { id: 3, atlas: 'answers_lvl_a', frames: ['tireSquare00', 'tireSquare01'], name: 'tireSquare00', prefix: 'tire00', audio: 'shape1', iscorrect: false },
                            { id: 4, atlas: 'answers_lvl_a', frames: ['tireTriangle00', 'tireTriangle01'], name: 'tireTriangle00', prefix: 'tire04', audio: 'shape3', iscorrect: false }
                        ]

                    },
                    {
                        answerc: {
                            id: 0, atlas: 'answers_lvl_a', frames: ['doorSquare00', 'doorSquare01'], name: 'doorSquare00', prefix: 'door00', audio: 'shape1', iscorrect: true
                        } ,
                        answer: [
                            { id: 1, atlas: 'answers_lvl_a', frames: ['doorCircle00', 'doorCircle01'], name: 'doorCircle00', prefix: 'door03', audio: 'shape0', iscorrect: false },
                            { id: 2, atlas: 'answers_lvl_a', frames: ['doorOval00', 'doorOval01'], name: 'doorOval00', prefix: 'door02', audio: 'shape4', iscorrect: false },
                            { id: 3, atlas: 'answers_lvl_a', frames: ['doorRectangle00', 'doorRectangle01'], name: 'doorRectangle00', prefix: 'door01', audio: 'shape2', iscorrect: false },
                            { id: 4, atlas: 'answers_lvl_a', frames: ['doorTriangle00', 'doorTriangle01'], name: 'doorTriangle00', prefix: 'door04', audio: 'shape3', iscorrect: false }    
                        ]
                    }

                ]
            },
            {
                id: 1,
                atlas:'level_a',
                name: 'bike00', 
                frame: ['bike00'],
                position: {x: 40, y: 130},
                dots: [ 
                    {
                        atlas: 'dots01',
                        name: 'square00',
                        frames: ['square00', 'square01', 'square03'],
                        position: { x: 710, y: 350 },
                        scale: { x: 0.21, y: 0.21 },
                        angle: 0
                    },
                    {
                        atlas: 'dots00',
                        name: 'circle00',
                        frames: ['circle00', 'circle01', 'circle03'],
                        position: { x: 220, y: 610 },
                        scale: { x: 0.43, y: 0.43 },
                        angle: 0
                    }
                ],
                options: [
                    {
                        answerc: {
                            id: 0, atlas: 'answers_lvl_a', frames: ['basketSquare00', 'basketSquare01'], name: 'basketSquare00', prefix: 'baskets00', audio: 'shape1', iscorrect: true 
                        } ,

                        answer: [
                            { id: 1, atlas: 'answers_lvl_a', frames: ['basketCircle00', 'basketCircle01'], name: 'basketCircle00', prefix: 'baskets03', audio: 'shape0', iscorrect: false },
                            { id: 2, atlas: 'answers_lvl_a', frames: ['basketOval00', 'basketOval01'], name: 'basketOval00', prefix: 'baskets02', audio: 'shape4', iscorrect: false },
                            { id: 3, atlas: 'answers_lvl_a', frames: ['basketRectangle00', 'basketRectangle01'], name: 'basketRectangle00', prefix: 'baskets01', audio: 'shape2', iscorrect: false },
                            { id: 4, atlas: 'answers_lvl_a', frames: ['basketTriangle00', 'basketTriangle01'], name: 'basketTriangle00', prefix: 'baskets04', audio: 'shape3', iscorrect: false }
                        ]

                    },
                    {
                        answerc: {
                            id: 0, atlas: 'answers_lvl_a', frames: ['wheelCircle00', 'wheelCircle01'], name: 'wheelCircle00', prefix: 'wheels03', audio: 'shape0', iscorrect: true 
                        } ,
                        answer: [
                            { id: 1, atlas: 'answers_lvl_a', frames: ['wheelOval00', 'wheelOval01'], name: 'wheelOval00', prefix: 'wheels02', audio: 'shape4', iscorrect: false },
                            { id: 2, atlas: 'answers_lvl_a', frames: ['wheelRectangle00', 'wheelRectangle01'], name: 'wheelRectangle00', prefix: 'wheels01', audio: 'shape2', iscorrect: false },
                            { id: 3, atlas: 'answers_lvl_a', frames: ['wheelSquare00', 'wheelSquare01'], name: 'wheelSquare00', prefix: 'wheels00', audio: 'shape1', iscorrect: false },
                            { id: 4, atlas: 'answers_lvl_a', frames: ['wheelTriangle00', 'wheelTriangle01'], name: 'wheelTriangle00', prefix: 'wheels04', audio: 'shape3', iscorrect: false }   
                        ]
                    }

                ]
            },
            {
                id: 2,
                atlas:'level_b',
                name: 'plane00', 
                frame: ['plane00'],
                position: {x: 112, y: 220},
                dots: [ 
                    {
                        atlas: 'dots02',
                        name: 'triangle00',
                        frames: ['triangle00', 'triangle01', 'triangle03'],
                        position: { x: 185, y: 368 },
                        scale: { x: 0.39, y: 0.35 },
                        angle: 76
                    },
                    {
                        atlas: 'dots01',
                        name: 'rectangle00',
                        frames: ['rectangle00', 'rectangle01', 'rectangle03'],
                        position: { x: 500, y: 650 },
                        scale: { x: 0.43, y: 0.63 },
                        angle: 85
                    }
                ],
                options: [
                    {
                        answerc: {
                           id: 0, atlas: 'answers_lvl_b', frames: ['finTriangle00', 'finTriangle01'], name: 'finTriangle00', prefix: 'fin04', audio: 'shape3', iscorrect: true
                        } ,

                        answer: [
                            { id: 1, atlas: 'answers_lvl_b', frames: ['finCircle00', 'finCircle01'], name: 'finCircle00', prefix: 'fin03', audio: 'shape0', iscorrect: false },
                            { id: 2, atlas: 'answers_lvl_b', frames: ['finOval00', 'finOval01'], name: 'finOval00', prefix: 'fin02', audio: 'shape4', iscorrect: false },
                            { id: 3, atlas: 'answers_lvl_b', frames: ['finReactangle00', 'finReactangle01'], name: 'finReactangle00', prefix: 'fin01', audio: 'shape2', iscorrect: false },
                            { id: 4, atlas: 'answers_lvl_b', frames: ['finSquare00', 'finSquare01'], name: 'finSquare00', prefix: 'fin00', audio: 'shape1', iscorrect: false }
                        ]

                    },
                    {
                        answerc: {
                            id: 3, atlas: 'answers_lvl_b', frames: ['wingRectangle00', 'wingRectangle01'], name: 'wingRectangle00', prefix: 'wings01', audio: 'shape2', iscorrect: true
                        } ,
                        answer: [
                            { id: 1, atlas: 'answers_lvl_b', frames: ['wingCircle00', 'wingCircle01'], name: 'wingCircle00', prefix: 'wings03', audio: 'shape0', iscorrect: false },
                            { id: 2, atlas: 'answers_lvl_b', frames: ['wingOval00', 'wingOval01'], name: 'wingOval00', prefix: 'wings02', audio: 'shape4', iscorrect: false },
                            { id: 3, atlas: 'answers_lvl_b', frames: ['wingSquare00', 'wingSquare01'], name: 'wingSquare00', prefix: 'wings00', audio: 'shape1', iscorrect: false },
                            { id: 4, atlas: 'answers_lvl_b', frames: ['wingTriangle00', 'wingTriangle01'], name: 'wingTriangle00', prefix: 'wings04', audio: 'shape3', iscorrect: false }   
                        ]
                    }
                ]
            },
            {
                id: 3,
                atlas:'level_c',
                name: 'boat00', 
                frame: ['boat00'],
                position: {x: 112, y: 10},
                dots: [ 
                    {
                        atlas: 'dots01',
                        name: 'rectangle00',
                        frames: ['rectangle00', 'rectangle01', 'rectangle03'],
                        position: { x: 470, y: 310 },
                        scale: { x: 0.79, y: 0.35 },
                        angle: 88
                    },
                    {
                        atlas: 'dots02',
                        name: 'triangle00',
                        frames: ['triangle00', 'triangle01', 'triangle03'],
                        position: { x: 318, y: 260 },
                        scale: { x: 0.65, y: 0.65 },
                        angle: 24
                    }
                ],
                options: [
                    {
                        answerc: {
                            id: 0, atlas: 'answers_lvl_c', frames: ['mastilRectangle00', 'mastilRectangle01'], name: 'mastilRectangle00', prefix: 'mastil04', audio: 'shape2', iscorrect: true
                        } ,

                        answer: [
                            { id: 1, atlas: 'answers_lvl_c', frames: ['mastilCircle00', 'mastilCircle01'], name: 'mastilCircle00', prefix: 'mastil02', audio: 'shape0', iscorrect: false },
                            { id: 2, atlas: 'answers_lvl_c', frames: ['mastilOval00', 'mastilOval01'], name: 'mastilOval00', prefix: 'mastil01', audio: 'shape4', iscorrect: false },
                            { id: 3, atlas: 'answers_lvl_c', frames: ['mastilSquare00', 'mastilSquare01'], name: 'mastilSquare00', prefix: 'mastil00', audio: 'shape1', iscorrect: false },
                            { id: 4, atlas: 'answers_lvl_c', frames: ['mastilTriangle00', 'mastilTriangle01'], name: 'mastilTriangle00', prefix: 'mastil03', audio: 'shape3', iscorrect: false }
                        ]

                    },
                    {
                        answerc: {
                            id: 0, atlas: 'answers_lvl_c', frames: ['sailTriangle00', 'sailTriangle01'], name: 'sailTriangle00', prefix: 'sail04', audio: 'shape3', iscorrect: true 
                        } ,
                        answer: [
                            { id: 1, atlas: 'answers_lvl_c', frames: ['sailCircle00', 'sailCircle01'], name: 'sailCircle00', prefix: 'sail03', audio: 'shape0', iscorrect: false },
                            { id: 2, atlas: 'answers_lvl_c', frames: ['sailOval00', 'sailOval01'], name: 'sailOval00', prefix: 'sail02', audio: 'shape4', iscorrect: false },
                            { id: 3, atlas: 'answers_lvl_c', frames: ['sailRectangle00', 'sailRectangle01'], name: 'sailRectangle00', prefix: 'sail01', audio: 'shape2', iscorrect: false },
                            { id: 4, atlas: 'answers_lvl_c', frames: ['sailSquare00', 'sailSquare01'], name: 'sailSquare00', prefix: 'sail00', audio: 'shape1', iscorrect: false } 
                        ]
                    }
                ]
            },
            {
                id: 4,
                atlas:'level_c',
                name: 'submarine00', 
                frame: ['submarine00'],
                position: {x: 80, y: 10},
                dots: [ 
                    {
                        atlas: 'dots01',
                        name: 'square00',
                        frames: ['square00', 'square01', 'square03'],
                        position: { x: 160, y: 545 },
                        scale: { x: 0.193, y: 0.193 },
                        angle: 0
                    },
                    {
                        atlas: 'dots00',
                        name: 'oval00',
                        frames: ['oval00', 'oval01', 'oval03'],
                        position: { x: 550, y: 520 },
                        scale: { x: 1, y: 1 },
                        angle: 0
                    }
                ],
                options: [
                    {
                        answerc: {
                            id: 0, atlas: 'answers_lvl_c', frames: ['timonSquare00', 'timonSquare01'], name: 'timonSquare00', prefix: 'timon00', audio: 'shape1', iscorrect: true
                        } ,

                        answer: [
                            { id: 1, atlas: 'answers_lvl_c', frames: ['timonCircle00', 'timonCircle01'], name: 'timonCircle00', prefix: 'timon03', audio: 'shape0', iscorrect: false },
                            { id: 2, atlas: 'answers_lvl_c', frames: ['timonOval00', 'timonOval01'], name: 'timonOval00', prefix: 'timon02', audio: 'shape4', iscorrect: false },
                            { id: 3, atlas: 'answers_lvl_c', frames: ['timonRectangle00', 'timonRectangle01'], name: 'timonRectangle00', prefix: 'timon01', audio: 'shape2', iscorrect: false },
                            { id: 4, atlas: 'answers_lvl_c', frames: ['timonTriangle00', 'timonTriangle01'], name: 'timonTriangle00', prefix: 'timon04', audio: 'shape3', iscorrect: false }
                        ]

                    },
                    {
                        answerc: {
                            id: 0, atlas: 'answers_lvl_c', frames: ['caseSquare02', 'caseSquare03'], name: 'caseSquare02', prefix: 'casesSubmarine02', audio: 'shape4', iscorrect: true 
                        } ,
                        answer: [
                            { id: 1, atlas: 'answers_lvl_c', frames: ['caseCircle00', 'caseCircle01'], name: 'caseCircle00', prefix: 'casesSubmarine03', audio: 'shape0', iscorrect: false },
                            { id: 3, atlas: 'answers_lvl_c', frames: ['caseRectangle00', 'caseRectangle01'], name: 'caseRectangle00', prefix: 'casesSubmarine01', audio: 'shape2', iscorrect: false },
                            { id: 4, atlas: 'answers_lvl_c', frames: ['caseSquare00', 'caseSquare01'], name: 'caseSquare00', prefix: 'casesSubmarine00', audio: 'shape1', iscorrect: false },
                            { id: 5, atlas: 'answers_lvl_c', frames: ['caseTriangle00', 'caseTriangle01'], name: 'caseTriangle00', prefix: 'casesSubmarine04', audio: 'shape3', iscorrect: false }
                        ]
                    }
                ]
            }
        ];
    };



