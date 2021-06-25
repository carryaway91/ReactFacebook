import React, { useContext, useState } from 'react';
import PostContainer from '../../UI/postContainer/PostContainer'
import Photo from '../../img/ja.jpg'
import styled from 'styled-components';
import Control from './control/Control';
import { LayoutContext } from '../../context/LayoutContext'
import UserCircle from '../userCircle/UserCircle';

const NewPost = () => {
    const [inputVal, setInputVal] = useState('')
    const { showOverlay, layoutStatus } = useContext(LayoutContext)
    
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <img src={Photo} width="40" height="40" style={{ borderRadius: '50%' }} />

                <PostInput placeholder="What's on your mind, Peter?" onFocus={() => showOverlay()} />

                { 
                    layoutStatus && ( 
                        <NewPostPopup> 
                            <h2 style={{ display: 'flex', justifyContent: 'center'}}>Create Post</h2>
                            <div style={{ width: '100%', height: '1px', background: '#ddd'}}/>
                            <div style={{ padding: '.8rem'}}>
                                <div style={{ display: 'flex'}}>
                                    <UserCircle w="40px" style={{ alignSelf: 'start'}} photo={Photo} />
                                    <div style={{ marginLeft: '.5rem'}}>
                                        <h5 style={{ margin: 0}}>Peter Babej</h5>
                                        <select>
                                            <option>Public</option>
                                            <option>Private</option>
                                            <option>Friends</option>
                                            <option>Only me</option>
                                        </select>
                                    </div>

                                </div>
                                <form>
                                    <textarea placeholder="What's on your mind, Peter?" 
                                    style={{ marginTop: '1rem', resize:"none",  width: '100%', fontSize: '1.5rem', border: 'none', outline: 'none'}} 
                                    rows="4"
                                    onChange={(e) => setInputVal(e.target.value)}
                                    value={inputVal}
                                    ></textarea>
                                    <PostBtn disabled>Post</PostBtn>
                                </form>
                            </div>
                        </NewPostPopup>
                    )            
                }





            </div>
            <div style={{ background: '#ddd', height: '1px', marginTop: '1rem' }}/>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '.7rem'}}>
                <Control title="Live Video">
                    <svg id="Capa_1" enable-background="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="30"><g><path d="m476.147 150.056-46.727 23.364-7.506 17.239-9.01-8.981v-41.29c0-31.926-25.881-57.807-57.807-57.807h-297.291c-16.175 0-30.798 6.643-41.29 17.349l-6.837 40.458v223.125c0 31.925 25.881 57.807 57.806 57.807h287.611l40.452-8.412c10.709-10.492 17.354-25.118 17.354-41.294v-41.29l99.098-8.26v-149.85c0-18.416-19.381-30.395-35.853-22.158z" fill="#ff7e92"/><path d="m335.333 244.101c-35.207-33.793-79.989-54.166-128.882-54.166-44.6 0-85.781 16.952-119.392 45.58l-9.49 26.733c35.207 33.793 79.989 54.166 128.882 54.166 37.247 0 72.108-6.172 102.168-26.745 9.399-6.433 18.328-13.721 26.714-21.77 6.721-6.452 6.721-17.346 0-23.798z" fill="#fff"/><path d="m239.484 256c0 5.911-1.552 11.459-4.272 16.259-5.674 10.015-16.428 14.183-28.761 14.183-18.243 0-30.673-12.198-30.673-30.441 0-12.31 4.375-23.047 14.359-28.729 4.813-2.739 10.381-4.303 16.314-4.303 18.244-.001 33.033 14.788 33.033 33.031z" fill="#ff7e92"/><g fill="#ff5f7a"><path d="m57.806 412.903c-22.804 0-41.29-18.486-41.29-41.29v-271.683c-10.206 10.424-16.516 24.716-16.516 40.457v231.226c0 31.925 25.881 57.806 57.806 57.806h297.29c15.74 0 30.024-6.31 40.448-16.516z"/><path d="m512 339.785v-17.721l-56.027-11.205c-15.44-3.088-26.554-16.645-26.554-32.391v-105.049l-16.516 8.258v148.645l63.243 31.621c16.473 8.237 35.854-3.741 35.854-22.158z"/><path d="m218.839 276.645c-18.243 0-33.032-14.789-33.032-33.032 0-5.928 1.597-11.532 4.331-16.342-9.991 5.68-16.718 16.414-16.718 28.729 0 18.243 14.789 33.032 33.032 33.032 12.315 0 23.081-6.782 28.761-16.774-4.811 2.735-10.446 4.387-16.374 4.387z"/></g><path d="m206.155 305.965c-47.898-6.74-89.024-32.744-119.095-70.449-3.236 2.757-6.398 5.617-9.49 8.585-6.721 6.452-6.721 17.347 0 23.798 35.207 33.794 79.989 54.166 128.882 54.166 37.229 0 72.118-11.841 102.168-32.396-31.773 15.043-66.808 21.313-102.465 16.296z" fill="#ffdbde"/></g></svg>
                </Control>
                <Control title="Photo/Video">
                    <svg fill="lime" height="30" viewBox="0 -21 511.98744 511" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m133.320312 373.828125c-34.152343 0-64.53125-21.867187-75.5625-54.421875l-.746093-2.453125c-2.601563-8.621094-3.691407-15.871094-3.691407-23.125v-145.453125l-51.753906 172.757812c-6.65625 25.410157 8.511719 51.753907 33.960938 58.773438l329.878906 88.34375c4.117188 1.066406 8.234375 1.578125 12.289062 1.578125 21.246094 0 40.660157-14.101563 46.101563-34.882813l19.21875-61.117187zm0 0"/><path d="m191.988281 149.828125c23.53125 0 42.664063-19.136719 42.664063-42.667969s-19.132813-42.667968-42.664063-42.667968-42.667969 19.136718-42.667969 42.667968 19.136719 42.667969 42.667969 42.667969zm0 0"/><path d="m458.652344.492188h-320c-29.394532 0-53.332032 23.9375-53.332032 53.335937v234.664063c0 29.398437 23.9375 53.335937 53.332032 53.335937h320c29.398437 0 53.335937-23.9375 53.335937-53.335937v-234.664063c0-29.398437-23.9375-53.335937-53.335937-53.335937zm-320 42.667968h320c5.890625 0 10.667968 4.777344 10.667968 10.667969v151.445313l-67.390624-78.636719c-7.148438-8.382813-17.496094-12.863281-28.609376-13.117188-11.050781.0625-21.417968 4.96875-28.5 13.460938l-79.234374 95.101562-25.8125-25.75c-14.589844-14.589843-38.335938-14.589843-52.90625 0l-58.878907 58.859375v-201.363281c0-5.890625 4.777344-10.667969 10.664063-10.667969zm0 0"/></svg>
                </Control>
                <Control title="Feeling/Activity">
                <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" width="30" height="30">
                    <circle fill="#FFCA28" cx="256" cy="256" r="256"/>
                    <g>
                        <path fill="#6D4C41" d="M399.68,208.32c-8.832,0-16-7.168-16-16c0-17.632-14.336-32-32-32s-32,14.368-32,32
                            c0,8.832-7.168,16-16,16s-16-7.168-16-16c0-35.296,28.704-64,64-64s64,28.704,64,64C415.68,201.184,408.512,208.32,399.68,208.32z"
                            />
                        <path fill="#6D4C41" d="M207.68,208.32c-8.832,0-16-7.168-16-16c0-17.632-14.368-32-32-32s-32,14.368-32,32
                            c0,8.832-7.168,16-16,16s-16-7.168-16-16c0-35.296,28.704-64,64-64s64,28.704,64,64C223.68,201.184,216.512,208.32,207.68,208.32z"
                            />
                    </g>
                    <path fill="#FAFAFA" d="M437.696,294.688c-3.04-4-7.744-6.368-12.736-6.368H86.4c-5.024,0-9.728,2.336-12.736,6.336
                        c-3.072,4.032-4.032,9.184-2.688,14.016C94.112,390.88,170.08,448.32,255.648,448.32s161.536-57.44,184.672-139.648
                        C441.696,303.84,440.736,298.688,437.696,294.688z"/>
                </svg>

                </Control>
            </div>
            </div>
    );
};

const PostInput = styled.input`
    width: 100%;
    padding: .8rem;
    background: #eee;
    margin-left: .7rem;
    border: none;
    border-radius: 2rem;
    outline: none;
    font-size: 1.2rem
    `
const NewPostPopup = styled.div`
    position: fixed;
    width: 500px;
    height: 20rem;
    background: white;
    border-radius: .5rem;
    box-shadow: 0 2px 2px 0 lightgray;
    z-index: 100;
    top: calc(50% - 10rem);
    left: calc(50% - 250px)
`

const PostBtn = styled.button`
    width: 100%;
    padding: .8rem 0;
    background: rgb(0, 132, 255);
    color: white;
    outline: none;
    border: none;
    border-radius: .3rem;

    &:hover {
        cursor: pointer;
        background: rgba(0, 132, 255, .8)
    }
`
export default NewPost;
