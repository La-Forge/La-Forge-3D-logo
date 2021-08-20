// create logo
let logo = new Zdog.Illustration({
    // set canvas with selector
    element: '.la_forge',
    dragRotate: true
});

var baseAnchor = new Zdog.Anchor({
    addTo: logo
  });
var peakAnchor = new Zdog.Anchor({
    addTo: logo
});

let base_color = '#000539';
let peak_color = '#FF3118';

let stroke = 7;

let w = 140;
let h = 165;

let h1 = h*0.455;
let h2 = h1+25;

let l1 = w/5;
let l2 = l1*1.1;
let l3 = w/2;


let a1 = { x: l3*-1, y: 0, z: l3 };
let a2 = { x: l3, y: 0, z: l3 };
let a3 = { x: l3, y: 0, z: l3*-1 };
let a4 = { x: l3*-1, y: 0, z: l3*-1 };

let b1 = { x: l2*-1, y: h1*-1, z: l2 };
let b2 = { x: l2, y: h1*-1, z: l2 };
let b3 = { x: l2, y: h1*-1, z: l2*-1 };
let b4 = { x: l2*-1, y: h1*-1, z: l2*-1 };

let c1 = { x: l1*-1, y: h2*-1, z: l1 };
let c2 = { x: l1, y: h2*-1, z: l1 };
let c3 = { x: l1, y: h2*-1, z: l1*-1 };
let c4 = { x: l1*-1, y: h2*-1, z: l1*-1 };

let d1 = { x: 0, y: h*-1, z: 0 };

peak_paths = [
    [c1, c2, c3, c4],
    [c1, c2, d1],
    [c2, c3, d1],
    [c3, c4, d1],
    [c4, c1, d1]
]

base_paths = [
    [a1, a2, a3, a4],
    [b1, b2, b3, b4],
    [a1, a2, b2, b1],
    [a2, a3, b3, b2],
    [a3, a4, b4, b3],
    [a4, a1, b1, b4]
]

paths0= [
    [a1, a2, a3, a4],
    [b1, b2, b3, b4],
    [c1, c2, c3, c4],
    [c1, c2, d1],
    [c2, c3, d1],
    [c3, c4, d1],
    [c4, c1, d1],
    [a1, a2, b2, b1],
    [a2, a3, b3, b2],
    [a3, a4, b4, b3],
    [a4, a1, b1, b4]
]


//base
for (const path of base_paths) {
    new Zdog.Shape({
        addTo: baseAnchor,
        path: path,
        stroke: 0,
        color: '#FFF',
        fill: true
    });
}
for (const path of base_paths) {
    new Zdog.Shape({
        addTo: baseAnchor,
        path: path,
        stroke: stroke,
        color: base_color,
        fill: false
    });
}

//peak
for (const path of peak_paths) {
    new Zdog.Shape({
        addTo: peakAnchor,
        path: path,
        stroke: 0,
        color: '#FFF',
        fill: true
    });
}
for (const path of peak_paths) { 
    new Zdog.Shape({
        addTo: peakAnchor,
        path: path,
        stroke: stroke,
        color: peak_color,
        fill: false
    });
}




// update & render
logo.updateRenderGraph();
logo.rotate.y += Zdog.TAU/8;
logo.rotate.x += -Zdog.TAU/10;


function animate() {
    // rotate logo each frame
    logo.rotate.y += 0.001;
    //baseAnchor.rotate.y -= 0.001;

    logo.updateRenderGraph();

    // animate next frame
    requestAnimationFrame(animate);
}
// start animation
animate();
