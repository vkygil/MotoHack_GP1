 

export function Sidebar() { 

    return (
        <div class="col-md-4">
            <div class="well"><strong>Filters</strong> </div>

            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                aria-expanded="false" aria-controls="collapseOne" class="collapsed">
                                Car <span class="glyphicon glyphicon-plus pull-right" aria-hidden="true"></span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel"
                        aria-labelledby="headingOne" aria-expanded="false" style="height: 0px;">
                        <div class="panel-body">

                            <div class="list-group">
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />Royal Enfield</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />Kymko</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />Suzuki</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />Honda</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />BMW</label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a class="" role="button" data-toggle="collapse" data-parent="#accordion"
                                href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                Year Of Manufacture <span class="glyphicon glyphicon-plus pull-right"
                                    aria-hidden="true"></span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse inxxx" role="tabpanel"
                        aria-labelledby="headingThree" aria-expanded="true">
                        <div class="panel-body">
                            <div class="list-group">
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />2022</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />2021</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />2020</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />2019</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />2018</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />2017</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="" />2016</label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingfive">
                        <h4 class="panel-title">
                            <a class="" role="button" data-toggle="collapse" data-parent="#accordion"
                                href="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                                Price <span class="glyphicon glyphicon-plus pull-right"
                                    aria-hidden="true"></span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapsefive" class="panel-collapse collapse in" role="tabpanel"
                        aria-labelledby="headingfive" aria-expanded="true">
                        <div class="panel-body">
                            <div class="list-group">
                                <label for="customRange1" class="form-label">Choose your price</label>
                                <input type="range" class="form-range" id="customRange1" min="0" max="100000" />
                                <div class="flexi">
                                    <p>0</p>
                                    <p>100.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
