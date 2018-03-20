import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Test extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isShow: true
        };

        this.handleClickOpenCity = this.handleClickOpenCity.bind(this);
    }


    handleClickOpenCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }


    render() {
        return (
            <div className="container">
                <div className="open-modal">
                    <span className="open-modal__text">Показать модальное окно</span>
                    <button id="btn-modal" className="open-modal__btn">Открыть</button>
                </div>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <p>Аналитика по площадкам</p>
                        <span class="close">x</span>

                        <Tabs>
                            <TabList>
                                <Tab>Title 1</Tab>
                                <Tab>Title 2</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>Any content 1</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                        </Tabs>

                    </div>

                </div>
            </div>
        )
    }
}


export default Test;