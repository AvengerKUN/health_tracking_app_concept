<template>
    <div ref="character" class="character">

    </div>
</template>

<script>
    import * as THREE from 'three'
    import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";

    export default {
        name: "Character",
        mounted() {
            this.init();
        },
        methods:{
            init(){
                let mixer;
                let clock = new THREE.Clock();
                let DIndex = this.$refs["character"];
                let scene = new THREE.Scene();
                //设置摄像机
                let camera = new THREE.PerspectiveCamera( 45, DIndex.clientWidth / DIndex.clientHeight, 1, 2000 );
                camera.position.set( 0, 100, 300 );

                let renderer = new THREE.WebGLRenderer({alpha:true,antialias: true});
                renderer.setClearAlpha(0);
                renderer.setSize( DIndex.clientWidth, DIndex.clientHeight );
                renderer.shadowMap.enabled = true;
                renderer.shadowMap.type = THREE.PCFSoftShadowMap;
                DIndex.appendChild( renderer.domElement );

                //设置灯光
                let light = new THREE.HemisphereLight( 0xffffff, 0x444444,1 );
                scene.add( light );

                //设置阴影灯光
                light = new THREE.DirectionalLight( 0xffffff,1);
                light.position.set( 80, 300, 300 );
                light.castShadow = true;
                scene.add( light );

                let loader = new FBXLoader();
                //加载模型
                loader.load( '/WalkingNotLocal.fbx', function ( object ) {

                    mixer = new THREE.AnimationMixer( object );

                    let action = mixer.clipAction( object.animations[ 0 ] );
                    action.play();

                    for(let i in object.children){
                        object.children[i].receiveShadow = true;
                        object.children[i].castShadow = true;
                    }
                    scene.add( object );

                } );

                function animate() {
                    let delta = clock.getDelta();
                    renderer.setSize( DIndex.clientWidth, DIndex.clientHeight );

                    //更新动画
                    if ( mixer && delta) mixer.update( delta );
                    renderer.render( scene, camera );
                    requestAnimationFrame( animate );
                }
                animate(0);
            }
        }
    }
</script>

<style scoped>
    .character{
        width: 100%;
        height: 100%;
    }
</style>