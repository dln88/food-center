import React, { Component } from 'react';

class ImgModal extends Component {
    render() {
        return (
            // <!-- The Modal -->
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">
                            <div className="row px-lg-2">
                                <img className="col-6 p-lg-2" style={{height: 172}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxb9Tmaoj5ttB_2vyoKgqN0mTgTSTUNurHUlZmaBC9F6EYO5i" />

                                <img alt="img" className="col-6 p-lg-2" style={{height: 172}} src="https://food-images.files.bbci.co.uk/food/recipes/simple_fish_dish_98008_16x9.jpg"/>
                                <img alt="img" className="col-6 p-lg-2" style={{height: 172}} src="https://food-images.files.bbci.co.uk/food/recipes/simple_fish_dish_98008_16x9.jpg"/>
                                <img alt="img" className="col-6 p-lg-2" style={{height: 172}} src="https://food-images.files.bbci.co.uk/food/recipes/simple_fish_dish_98008_16x9.jpg"/>
                                <img alt="img" className="col-6 p-lg-2" style={{height: 172}} src="https://food-images.files.bbci.co.uk/food/recipes/simple_fish_dish_98008_16x9.jpg"/>
                                <img alt="img" className="col-6 p-lg-2" style={{height: 172}} src="https://food-images.files.bbci.co.uk/food/recipes/simple_fish_dish_98008_16x9.jpg"/>
                                <img alt="img" className="col-6 p-lg-2" style={{height: 172}} src="https://food-images.files.bbci.co.uk/food/recipes/simple_fish_dish_98008_16x9.jpg"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ImgModal;