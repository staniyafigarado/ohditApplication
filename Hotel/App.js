import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, ImageBackground, Linking } from 'react-native';
import Video from 'react-native-video';
import ElevatedView from 'react-native-elevated-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigationFocus } from 'react-navigation';
import 'react-native-gesture-handler';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            videoPaused: false
        }
    }

    Video() {
        if (this.props.navigation.state.params.Id == '1') {
            return <View style={{ flex: 1 }}>
                <Video
                    source={require('../assets/videos/Aster.mp4')}
                    style={{ width: '100%', height: 170, position: "absolute" }}
                    muted={false}
                    repeat={false}
                    resizeMode={"cover"}
                    volume={1.0}
                    rate={1.0}
                    ignoreSilentSwitch={"ignore"}
                    playWhenInactive={false}
                    playInBackground={false}
                    paused={this.state.videoPaused}
                />
                <View style={{ flexDirection: 'row', marginTop: 100, padding: 5 }}>
                    <View style={{ width: 55, height: 55, borderRadius: 50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: this.props.navigation.state.params.Source }}
                            style={{ width: 50, height: 50, borderRadius: 50 }}></Image>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginLeft: 10, color: 'white' }}>{this.props.navigation.state.params.Name}</Text>
                </View>
            </View>
        } else if (this.props.navigation.state.params.Id == '3') {
            return <View style={{ flex: 1 }}>
                <Video
                    source={require('../assets/videos/gleneagles.mp4')}
                    style={{ width: '100%', height: 150, position: "absolute" }}
                    muted={true}
                    repeat={false}
                    resizeMode={"cover"}
                    volume={1.0}
                    rate={1.0}
                    ignoreSilentSwitch={"ignore"}
                    playWhenInactive={true}
                    playInBackground={true}
                    paused={this.state.videoPaused}
                />
                <View style={{ flexDirection: 'row', marginTop: 80, padding: 5 }}>
                    <View style={{ width: 55, height: 55, borderRadius: 50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: this.props.navigation.state.params.Source }}
                            style={{ width: 50, height: 50, borderRadius: 50 }}></Image>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginLeft: 10, color: 'white' }}>{this.props.navigation.state.params.Name}</Text>
                </View>
            </View>
        }
        else if (this.props.navigation.state.params.Id == '5') {
            return <View style={{ flex: 1 }}>
                <Video
                    source={require('../assets/videos/prince.mp4')}
                    style={{ width: '100%', height: 170, position: "absolute" }}
                    muted={true}
                    repeat={false}
                    resizeMode={"cover"}
                    volume={1.0}
                    rate={1.0}
                    ignoreSilentSwitch={"ignore"}
                    playWhenInactive={true}
                    playInBackground={true}
                    paused={this.state.videoPaused}
                />
                <View style={{ flexDirection: 'row', marginTop: 90, padding: 5 }}>
                    <View style={{ width: 55, height: 55, borderRadius: 50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: this.props.navigation.state.params.Source }}
                            style={{ width: 50, height: 50, borderRadius: 50 }}></Image>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginLeft: 10, color: 'white' }}>{this.props.navigation.state.params.Name}</Text>
                </View>
            </View>
        } else if (this.props.navigation.state.params.Id == '6') {
            return <View style={{ flex: 1 }}>
                <Video
                    source={require('../assets/videos/west.mp4')}
                    style={{ width: '100%', height: 170, position: "absolute" }}
                    muted={true}
                    repeat={false}
                    resizeMode={"cover"}
                    volume={1.0}
                    rate={1.0}
                    ignoreSilentSwitch={"ignore"}
                    playWhenInactive={true}
                    playInBackground={true}
                    paused={this.state.videoPaused}
                />
                <View style={{ flexDirection: 'row', marginTop: 90, padding: 5 }}>
                    <View style={{ width: 55, height: 55, borderRadius: 50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: this.props.navigation.state.params.Source }}
                            style={{ width: 50, height: 50, borderRadius: 50 }}></Image>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginLeft: 10, color: 'white' }}>{this.props.navigation.state.params.Name}</Text>
                </View>
            </View>
        }
        else if (this.props.navigation.state.params.Id == '10') {
            return <View style={{ flex: 1 }}>
                <Video
                    source={require('../assets/videos/sheba.mp4')}
                    style={{ width: '100%', height: 170, position: "absolute" }}
                    muted={true}
                    repeat={false}
                    resizeMode={"cover"}
                    volume={1.0}
                    rate={1.0}
                    ignoreSilentSwitch={"ignore"}
                    playWhenInactive={true}
                    playInBackground={true}
                    paused={this.state.videoPaused}
                />
                <View style={{ flexDirection: 'row', marginTop: 90, padding: 5 }}>
                    <View style={{ width: 55, height: 55, borderRadius: 50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: this.props.navigation.state.params.Source }}
                            style={{ width: 50, height: 50, borderRadius: 50 }}></Image>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginLeft: 10, color: 'white' }}>{this.props.navigation.state.params.Name}</Text>
                </View>
            </View>
        }
        else {
            return <View>
                <ImageBackground source={{ uri: 'https://i.ytimg.com/vi/UH1ThWZ9hXU/hqdefault.jpg' }}
                    style={{ height: 170 }}></ImageBackground>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: this.props.navigation.state.params.Source }}
                            style={{ width: 50, height: 50, borderRadius: 50 }}></Image>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginLeft: 10, color: 'black' }}>{this.props.navigation.state.params.Name}</Text>
                </View>
            </View>
        }
    }
    // Sergeries
    surgeries() {
        if (this.props.navigation.state.params.Id == '1') {
            return <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18 }}>Surgeries Provided</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}
                    style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, width: '100%', }}>
                    <ElevatedView elevation={3} style={{ width: '100%', borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                        <View style={{ width: '20%' }}>
                            <Image source={require("../assets/images/general.png")}
                                style={{ width: 60, height: 60, borderRadius: 50 }}></Image>
                        </View>
                        <View style={{ width: '40%' }}>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>General Surgery</Text>
                        </View>
                        <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 3000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </View>
                    </ElevatedView>
                </TouchableOpacity>
            </View>
        } else if (this.props.navigation.state.params.Id == '2') {
            return <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18 }}>Surgeries Provided</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}
                    style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, width: '100%', }}>
                    <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                        <Image source={require("../assets/images/general.png")}
                            style={{ width: 60, height: 60, borderRadius: 50 }}></Image>
                        <Text style={{ marginLeft: 5, fontSize: 16 }}>General Surgery</Text>
                        <Text style={{ fontSize: 16, marginLeft: 55, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 3000</Text>
                        <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                    </ElevatedView>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}
                    style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, width: '100%', }}>
                    <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2lzGWwa5XCdeiS24TDU5fJCzcD7eWQXaDiQ&usqp=CAU" }}
                            style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ marginLeft: 5, fontSize: 16 }}>Othopedic Surgery</Text>
                        <Text style={{ fontSize: 16, marginLeft: 35, color: 'gold', fontWeight: 'bold' }}>$ 6000 - 14500</Text>
                        <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                    </ElevatedView>
                </TouchableOpacity>
            </View>
        } else if (this.props.navigation.state.params.Id == '3') {
            return <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18 }}>Surgeries Provided</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}
                    style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, width: '100%', }}>
                    <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                        <Image source={require("../assets/images/general.png")}
                            style={{ width: 60, height: 60, borderRadius: 50 }}></Image>
                        <Text style={{ marginLeft: 5, fontSize: 16 }}>General Surgery</Text>
                        <Text style={{ fontSize: 16, marginLeft: 55, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 3000</Text>
                        <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                    </ElevatedView>
                </TouchableOpacity>
            </View>
        } else if (this.props.navigation.state.params.Id == '4') {
            return <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18 }}>Surgeries Provided</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={require("../assets/images/general.png")}
                                style={{ width: 60, height: 60, borderRadius: 50 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>General Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 55, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 3000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: "data:image/jpeg;base64,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" }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Pediatric Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 35, color: 'gold', fontWeight: 'bold' }}>$ 1800 - 5000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
            </View>
        } else if (this.props.navigation.state.params.Id == '5') {
            return <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18 }}>Surgeries Provided</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={require("../assets/images/general.png")}
                                style={{ width: 60, height: 60, borderRadius: 50 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>General Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 55, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 3000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTUbcM4Z7e1X8FjmEFq7RO9M4cgHKxsMyeLg&usqp=CAU' }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Endocrine Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, color: 'gold', fontWeight: 'bold' }}>$ 250 - 1000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: 'data:image/png;base64,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' }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Spine Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 65, color: 'gold', fontWeight: 'bold' }}>$ 6000 - 13000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwH7fpgvlAtf_O8MrbjdvBoa7YNsLkLZd7bQ&usqp=CAU' }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Vascular Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, color: 'gold', fontWeight: 'bold' }}>$ 3000 - 9500</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
            </View>
        } else if (this.props.navigation.state.params.Id == '6') {
            return <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18 }}>Surgeries Provided</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={require("../assets/images/general.png")}
                                style={{ width: 60, height: 60, borderRadius: 50 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>General Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 55, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 3000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvZWCqKbvEWv0iJV-bOiaClu2o0wjYmFU-Wg&usqp=CAU" }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Eye Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 80, color: 'gold', fontWeight: 'bold' }}>$ 800 - 2000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXEufczT1S1cn0LqXkDbX3hcbf2LQBFQkO1Q&usqp=CAU" }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Cardiac Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 55, color: 'gold', fontWeight: 'bold' }}>$ 250 - 8000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZiUBzgqTgh8-LMwv10MDqjXb6iL_I4hD6lQ&usqp=CAU" }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Cosmetic Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 45, color: 'gold', fontWeight: 'bold' }}>$ 800 - 5000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
            </View>
        } else if (this.props.navigation.state.params.Id == '7') {
            return <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18 }}>Surgeries Provided</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={require("../assets/images/general.png")}
                                style={{ width: 60, height: 60, borderRadius: 50 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>General Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 55, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 3000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
            </View>
        } else if (this.props.navigation.state.params.Id == '8') {
            return <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18 }}>Surgeries Provided</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={require("../assets/images/general.png")}
                                style={{ width: 60, height: 60, borderRadius: 50 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>General Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 55, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 3000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZiUBzgqTgh8-LMwv10MDqjXb6iL_I4hD6lQ&usqp=CAU" }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Cosmetic Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 45, color: 'gold', fontWeight: 'bold' }}>$ 800 - 5000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
            </View>
        } else if (this.props.navigation.state.params.Id == '9') {
            return <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18 }}>Surgeries Provided</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={require("../assets/images/general.png")}
                                style={{ width: 60, height: 60, borderRadius: 50 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>General Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 55, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 3000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZiUBzgqTgh8-LMwv10MDqjXb6iL_I4hD6lQ&usqp=CAU" }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Plastic Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 65, color: 'gold', fontWeight: 'bold' }}>$ 6000 - 8000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwH7fpgvlAtf_O8MrbjdvBoa7YNsLkLZd7bQ&usqp=CAU" }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Vascular Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 2000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
            </View>
        } else if (this.props.navigation.state.params.Id == '10') {
            return <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18 }}>Surgeries Provided</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={require("../assets/images/general.png")}
                                style={{ width: 60, height: 60, borderRadius: 50 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>General Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 55, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 3000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZiUBzgqTgh8-LMwv10MDqjXb6iL_I4hD6lQ&usqp=CAU" }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Neuro Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 70, color: 'gold', fontWeight: 'bold' }}>$ 4000 - 6500</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwH7fpgvlAtf_O8MrbjdvBoa7YNsLkLZd7bQ&usqp=CAU" }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Vascular Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 55, color: 'gold', fontWeight: 'bold' }}>$ 1500 - 2000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')}>
                        <ElevatedView elevation={3} style={{ width: 350, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXEufczT1S1cn0LqXkDbX3hcbf2LQBFQkO1Q&usqp=CAU" }}
                                style={{ width: 60, height: 60, borderRadius: 50, marginTop: 5 }}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>Cardiac Surgery</Text>
                            <Text style={{ fontSize: 16, marginLeft: 65, color: 'gold', fontWeight: 'bold' }}>$ 250 - 8000</Text>
                            <Icon name={'angle-right'} size={25} style={{ marginLeft: 5 }} />
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
            </View>
        }
        else {
            return null
        }
    }
    specialists() {
        if (this.props.navigation.state.params.Id == '1') {
            return <View style={{ paddingTop: 5, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Specialists</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require("../assets/images/aimg1.jpg")}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Cardiac Sciences</Text>
                        <Text style={{ color: 'gray' }}>Dr. Anil Kumar R</Text>
                        <Text>Senior</Text>
                        <Text>Consultant</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require("../assets/images/aimg2.jpg")}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Neurosciences</Text>
                        <Text style={{ color: 'gray' }}>Dr. Dilip Panikar</Text>
                        <Text>Senior</Text>
                        <Text>Consultant</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require("../assets/images/aimg3.jpg")}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Oncology</Text>
                        <Text style={{ color: 'gray' }}>Dr. Jem Kalathil</Text>
                        <Text>Senior</Text>
                        <Text>Consultant</Text>
                    </ElevatedView>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require("../assets/images/aimg1.jpg")}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Cardiac Sciences</Text>
                        <Text style={{ color: 'gray' }}>Dr. Anil Kumar R</Text>
                        <Text>Senior</Text>
                        <Text>Consultant</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require("../assets/images/aimg2.jpg")}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Neurosciences</Text>
                        <Text style={{ color: 'gray' }}>Dr. Dilip Panikar</Text>
                        <Text>Senior</Text>
                        <Text>Consultant</Text>
                    </ElevatedView>
                </View>
            </View>

        } else if (this.props.navigation.state.params.Id == '2') {
            return <View style={{ paddingTop: 5, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Specialists</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://physiciandirectory.brighamandwomens.org/Custom/Photos/hires/1.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Renal Disease</Text>
                        <Text style={{ color: 'gray' }}>Reza Abdi</Text>
                        <Text>MD</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://physiciandirectory.brighamandwomens.org/Custom/Photos/127.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Pediatric Medicine</Text>
                        <Text style={{ color: 'gray' }}>Elisa</Text>
                        <Text style={{ color: 'gray' }}>Abdulhayoglu</Text>
                        <Text>MD, MS</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://physiciandirectory.brighamandwomens.org/Custom/Photos/1884.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Oncology</Text>
                        <Text style={{ color: 'gray' }}>Gregory A. Abel</Text>
                        <Text>MD</Text>
                    </ElevatedView>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://physiciandirectory.brighamandwomens.org/Custom/Photos/2051.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Hematology</Text>
                        <Text style={{ color: 'gray' }}>Maureen M</Text>
                        <Text>MD</Text>
                    </ElevatedView>
                </View>
            </View>

        } else if (this.props.navigation.state.params.Id == '3') {
            return <View style={{ paddingTop: 5, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Specialists</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.gleneagles.com.sg/images/default-source/doctor/chia-stanley.tmb-197x270.jpg?sfvrsn=2eefbc1e_0' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Cardiology</Text>
                        <Text style={{ color: 'gray' }}>Dr Chia Stanley</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.gleneagles.com.sg/images/default-source/doctor/koh-hong-yi.tmb-197x270.jpg?sfvrsn=16f5ce11_0' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Dermatology</Text>
                        <Text style={{ color: 'gray' }}>Dr Koh Hong Yi</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.gleneagles.com.sg/images/default-source/doctor/docs000001.tmb-197x270.jpg?sfvrsn=d7222a1a_1' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Endocrinology</Text>
                        <Text style={{ color: 'gray' }}>Dr Chan Heng</Text>
                        <Text style={{ color: 'gray' }}>Chun</Text>
                    </ElevatedView>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.gleneagles.com.sg/images/default-source/doctor/ho-king-hee.tmb-197x270.jpg?sfvrsn=76958a1e_0' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Neurology</Text>
                        <Text style={{ color: 'gray' }}>Dr Ho King Hee</Text>
                    </ElevatedView>
                </View>
            </View>

        } else if (this.props.navigation.state.params.Id == '4') {
            return <View style={{ paddingTop: 5, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Specialists</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://beijing.ufh.com.cn/wp-content/uploads/2011/01/%E5%86%AF%E4%B8%B9-100x150.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Stomatology</Text>
                        <Text style={{ color: 'gray' }}>Feng Dany</Text>
                        <Text>Senior</Text>
                        <Text>Dentist</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://beijing.ufh.com.cn/wp-content/uploads/2014/05/YUAN_Shan_new.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Dermatology</Text>
                        <Text style={{ color: 'gray' }}>Yuan Shan</Text>
                        <Text>Director</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://beijing.ufh.com.cn/wp-content/uploads/2015/05/lu-jike.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Orthopedics</Text>
                        <Text style={{ color: 'gray' }}>Lu Jike</Text>
                        <Text>Chief</Text>
                        <Text>Physician</Text>
                    </ElevatedView>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://beijing.ufh.com.cn/wp-content/uploads/2014/05/WANG-Lan.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Opthalmology</Text>
                        <Text style={{ color: 'gray' }}>Wang Lan</Text>
                        <Text>Director</Text>
                    </ElevatedView>
                </View>
            </View>

        }
        else if (this.props.navigation.state.params.Id == '5') {
            return <View style={{ paddingTop: 5, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Specialists</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://beijing.ufh.com.cn/wp-content/uploads/2011/01/%E5%86%AF%E4%B8%B9-100x150.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Stomatology</Text>
                        <Text style={{ color: 'gray' }}>Feng Dany</Text>
                        <Text>Senior</Text>
                        <Text>Dentist</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://beijing.ufh.com.cn/wp-content/uploads/2014/05/YUAN_Shan_new.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Dermatology</Text>
                        <Text style={{ color: 'gray' }}>Yuan Shan</Text>
                        <Text>Director</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://beijing.ufh.com.cn/wp-content/uploads/2015/05/lu-jike.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Orthopedics</Text>
                        <Text style={{ color: 'gray' }}>Lu Jike</Text>
                        <Text>Chief</Text>
                        <Text>Physician</Text>
                    </ElevatedView>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://beijing.ufh.com.cn/wp-content/uploads/2014/05/WANG-Lan.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Opthalmology</Text>
                        <Text style={{ color: 'gray' }}>Wang Lan</Text>
                        <Text>Director</Text>
                    </ElevatedView>
                </View>
            </View>
        } else if (this.props.navigation.state.params.Id == '6') {
            return <View style={{ paddingTop: 5, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Specialists</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.ramsayhealth.co.uk/dist/img/avatar.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Neurology</Text>
                        <Text style={{ color: 'gray' }}>Dr Maxwell</Text>
                        <Text style={{ color: 'gray' }}>Damian</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.ramsayhealth.co.uk/dist/img/avatar.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Dermatology</Text>
                        <Text style={{ color: 'gray' }}>Dr Olivia</Text>
                        <Text style={{ color: 'gray' }}>Stevenson</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require('../assets/images/ortho.jpg')}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Orthopedics</Text>
                        <Text style={{ color: 'gray' }}>Mr Jose Blanco</Text>
                    </ElevatedView>
                </View>
            </View>

        } else if (this.props.navigation.state.params.Id == '7') {
            return <View style={{ paddingTop: 5, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Specialists</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.hirslanden.ch/renditions/corporate/doctors/original/384/1585325159649/2097783-dr-med-evelyn-luggauer.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Anesthesiology</Text>
                        <Text style={{ color: 'gray' }}>Evelyn Luggauer</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.hirslanden.ch/renditions/corporate/doctors/original/384/1593576270519/12657-dr-med-vjekoslav-ilijic.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>General medicine</Text>
                        <Text style={{ color: 'gray' }}>Vjekoslav Ilijic</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.hirslanden.ch/renditions/corporate/doctors/original/384/1585325499481/2109015-dr-med-philipp-steiger.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Radiology</Text>
                        <Text style={{ color: 'gray' }}>Philipp Steiger</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.hirslanden.ch/renditions/corporate/doctors/original/384/1585382210811/12632-prof-dr-med-felix-stickel.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Gastroenterology</Text>
                        <Text style={{ color: 'gray' }}>Felix Stickel</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                </View>
            </View>
        } else if (this.props.navigation.state.params.Id == '8') {
            return <View style={{ paddingTop: 5, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Specialists</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.klinikum.uni-heidelberg.de/fileadmin/_processed_/4/f/csm_Unterberg_da2111fc9d.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Neurology</Text>
                        <Text style={{ textAlign: 'center', color: 'gray' }}>Andreas Unterberg</Text>
                        <Text>Director</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.klinikum.uni-heidelberg.de/fileadmin/_processed_/1/b/csm_Enk_Alexander_01_9f44bdaf5a.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Dermatology</Text>
                        <Text style={{ color: 'gray' }}>Alexander Enk</Text>
                        <Text>MD</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.klinikum.uni-heidelberg.de/fileadmin/_processed_/2/c/csm_Debus_54c9bf98a4.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Radiology</Text>
                        <Text style={{ color: 'gray' }}>Jürgen Debus</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.hirslanden.ch/renditions/corporate/doctors/original/384/1585382210811/12632-prof-dr-med-felix-stickel.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Gastroenterology</Text>
                        <Text style={{ color: 'gray' }}>Felix Stickel</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                </View>
            </View>

        } else if (this.props.navigation.state.params.Id == '9') {
            return <View style={{ paddingTop: 5, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Specialists</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require('../assets/images/UserIcon.png')}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Cardiology</Text>
                        <Text style={{ textAlign: 'center', color: 'gray' }}>Pieter Vriesendorp</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require('../assets/images/UserIcon.png')}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Radiology</Text>
                        <Text style={{ textAlign: 'center', color: 'gray' }}>Ekaterina Alibrahim</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require('../assets/images/UserIcon.png')}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Oncology</Text>
                        <Text style={{ textAlign: 'center', color: 'gray' }}>Malaka Ameratunga</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require('../assets/images/UserIcon.png')}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Endocrinology</Text>
                        <Text style={{ textAlign: 'center', color: 'gray' }}>Richard Arnott</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                </View>
            </View>
        } else if (this.props.navigation.state.params.Id == '10') {
            return <View style={{ paddingTop: 5, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Specialists</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.klinikum.uni-heidelberg.de/fileadmin/_processed_/4/f/csm_Unterberg_da2111fc9d.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Dermatology</Text>
                        <Text style={{ textAlign: 'center', color: 'gray' }}>Aviv Barzilai</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require('../assets/images/UserIcon.png')}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Endocrinology</Text>
                        <Text style={{ textAlign: 'center', color: 'gray' }}>Richard Arnott</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 5,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={require('../assets/images/UserIcon.png')}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Neurology</Text>
                        <Text style={{ textAlign: 'center', color: 'gray' }}>Joab Chapman</Text>
                        <Text>Director</Text>
                    </ElevatedView>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ElevatedView
                        elevation={3}
                        style={{
                            width: 110,
                            height: 135, marginTop: 5, marginLeft: 7,
                            backgroundColor: 'white', borderRadius: 5, alignItems: 'center'
                        }}>
                        <Image source={{ uri: 'https://www.hirslanden.ch/renditions/corporate/doctors/original/384/1585382210811/12632-prof-dr-med-felix-stickel.jpg' }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}></Image>
                        <Text style={{ color: 'green' }}>Gastroenterology</Text>
                        <Text style={{ color: 'gray' }}>Dr.Amir Tirosh</Text>
                        <Text>Specialist</Text>
                    </ElevatedView>
                </View>
            </View>
        }
        else {
            return <View></View>
        }
    }
    render() {
        return (

            <ScrollView >
                <View style={{ flex: 1 }}>
                    {this.Video()}
                </View>
                <View style={{
                    flex: 1, flexDirection: 'column', padding: 5
                }}>
                    {/* About */}
                    <View style={{ marginTop: 5 }} >
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>About Us</Text>
                        <Text style={{ marginTop: 5, textAlign: 'justify', color: '#5E5959' }}>{this.props.navigation.state.params.About}</Text>
                    </View>
                    {/* specialists */}
                    <View>{this.specialists()}</View>
                    <View>{this.surgeries()}</View>
                </View>
            </ScrollView>
        );
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            ...prevState,
            videoPaused: !nextProps.navigation.isFocused()
        }
    }
}; export default withNavigationFocus(Details)


import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, ImageBackground, Linking } from 'react-native';
import Video from 'react-native-video';
import ElevatedView from 'react-native-elevated-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigationFocus } from 'react-navigation';
import 'react-native-gesture-handler';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            videoPaused: false
        }
    }
    render() {
        return (

            <ScrollView >
                <View style={{ flex: 1 }}>
                    <ImageBackground style={{ width: '100%', height: 150 }}
                        source={{ uri: this.props.navigation.state.params.Source }}>

                    </ImageBackground>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'column', padding: 8
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: this.props.navigation.state.params.Source }}
                                style={{ width: 50, height: 50, borderRadius: 50 }}></Image>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginLeft: 10, color: 'black' }}>{this.props.navigation.state.params.Name}</Text>
                    </View>
                    {/* About */}
                    <View style={{ marginTop: 5 }} >
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>About Us</Text>
                        <Text style={{ marginTop: 5, textAlign: 'justify', color: '#5E5959' }}>{this.props.navigation.state.params.About}</Text>
                    </View>
                    {/* specialists */}
                    {/* <View>{this.specialists()}</View>
                    <View>{this.surgeries()}</View> */}
                </View>
            </ScrollView>
        );
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            ...prevState,
            videoPaused: !nextProps.navigation.isFocused()
        }
    }
}; export default withNavigationFocus(Details)
