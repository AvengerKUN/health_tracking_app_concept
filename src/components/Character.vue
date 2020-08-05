<template>
    <div ref="character" class="character">

    </div>
</template>

<script>
    import * as THREE from 'three'
    import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";

    export default {
        name: "Character",
        data(){
            return {
                camera:null,
                character:null,
            }
        },
        mounted() {
            this.init();
        },
        methods:{
            lerp(p0, p1, value) {
                return (1 - value) * p0 + value * p1;
            },
            overVector(v1,v2,time,fun){
                let that = this;
                let num = 0;
                let times = 0;
                requestAnimationFrame(function anim(timestamp){
                    if(times && timestamp){
                        num = num + (timestamp - times);
                        let per = Math.min(num / time,1);
                        fun(new THREE.Vector3(that.lerp(v1.x,v2.x,per),that.lerp(v1.y,v2.y,per),that.lerp(v1.z,v2.z,per)));
                    }
                    times = timestamp;

                    if(num < time){
                        requestAnimationFrame(anim);
                    }
                });
            },
            init(){
                let that = this;

                let mixer;
                let clock = new THREE.Clock();
                let DIndex = this.$refs["character"];
                let scene = new THREE.Scene();
                //设置摄像机
                this.camera = new THREE.PerspectiveCamera( 45, DIndex.clientWidth / DIndex.clientHeight / .9, 1, 2000 );
                this.camera.position.set( 0, 100, 300 );

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
                    that.character = object;
                } );

                function animate() {
                    let delta = clock.getDelta();
                    renderer.setSize( DIndex.clientWidth, DIndex.clientHeight );

                    //更新动画
                    if ( mixer && delta) mixer.update( delta );
                    renderer.render( scene, that.camera );
                    requestAnimationFrame( animate );
                }
                animate(0);
            },
            moveLeft(){
                this.overVector(new THREE.Vector3(0, 0, 0),new THREE.Vector3(0, 1.5, 0),1000,(vector3)=>{
                    // console.log(vector3);
                    this.character.rotation.set(vector3.x,vector3.y,vector3.z);
                });
                this.overVector(new THREE.Vector3(0, 100, 300),new THREE.Vector3(0, 100, 300),1000,(vector3)=>{
                    // console.log(vector3);
                    this.camera.position.set(vector3.x,vector3.y,vector3.z);
                });
            },
            moveFront(){
                this.overVector(new THREE.Vector3(0, 1.5, 0),new THREE.Vector3(0, 0, 0),1000,(vector3)=>{
                    // console.log(vector3);
                    this.character.rotation.set(vector3.x,vector3.y,vector3.z);
                });
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