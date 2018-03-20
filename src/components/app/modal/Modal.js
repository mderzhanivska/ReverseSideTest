import React, {Component} from 'react';
import ModalReact from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import config from '../../../config';
import Table from './table/Table';


class Modal extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <div className="open-modal">
                    <span className="open-modal__text">Показать модальное окно</span>
                    <button
                        id="btn-modal"
                        className="open-modal__btn"
                        onClick={this.openModal}
                    >Открыть</button>
                </div>
                <ModalReact
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                >
                    <div className="modal-title">
                        <h2>Аналитика по площадкам</h2>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Таблица</Tab>
                            <Tab>График</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="tab-title">
                                <h2>Аналитика  данных в таблице</h2>
                            </div>

                            <Table
                                data={config.table.data}
                                columns={config.table.columns}
                            />

                        </TabPanel>
                        <TabPanel>
                            <div className="tab-title">
                                <h2>Аналитика  данных в  графике</h2>
                            </div>
                        </TabPanel>
                    </Tabs>
                </ModalReact>
            </div>
        );
    }
}

export default Modal;