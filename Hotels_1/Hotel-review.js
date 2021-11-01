var url = new URL(window.location.href);
var hotelId = url.searchParams.get("hotel");


$("#htlInfo__wrapper").html(`<div class="htlInfo__dtl">
                                <div class="htlInfo__dtlLeft">
                                    <div class="makeFlex appendBottom10">
                                        <div class="makeFlex appendTop10"><img class="assureTagImgIcon"
                                                src="https://promos.makemytrip.com/COVID/safe.png" height="24" alt="">
                                        </div>
                                    </div>
                                    <div class="makeFlex appendBottom5">
                                        <h3 class="latoBlack font22 blackText">${hotels[hotelId].name}</h3>
                                    </div>
                                    <p class="font12 grayText">${hotels[hotelId].location}</p>
                                </div>
                                <div class="htlInfo__dtlRight">
                                    <div class="htlInfo__dtlRightImg"><img
                                            src="${hotels[hotelId].image}" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="chkCont">
                                <div class="chkCont__col">
                                    <div class="makeFlex column"><span class="font10 grayText appendBottom3">CHECK
                                            IN</span><span class="latoBlack font24 blackText appendBottom3">${hotels[hotelId].dates}
                                            </span></div>
                                </div>
                            </div>`)
$("#price_section").html(`<div class="prcBreakup appendBottom30">
                            <div class="prcBreakup__hdr">PRICE BREAK-UP</div>
                            <div class="prcBreakup__cont">
                                <div class="prcBreakup__row">
                                    <div class="makeFlex flexOne spaceBetween">
                                        <div class="prcBreakup__lft">
                                            <p class="latoBold blackText makeFlex"> <span>2 Beds</span> <span> x </span>
                                                <span>1 Night</span>
                                            </p>
                                            <p class="font12 grayText appendTop3">Base Price</p>
                                        </div>
                                        <div class="prcBreakup__rht">
                                            <p class="latoBold">₹ ${hotels[hotelId].price}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="prcBreakup__row">
                                    <div class="makeFlex flexOne spaceBetween">
                                        <div class="prcBreakup__lft">
                                            <p class="latoBold blackText">Net Price</p>
                                        </div>
                                        <div class="prcBreakup__rht">
                                            <p class="latoBold">₹ 0</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="prcBreakup__row">
                                    <div class="makeFlex flexOne spaceBetween">
                                        <div class="prcBreakup__lft">
                                            <div class="latoBold blackText makeFlex hrtlCenter">Service Fees</div>
                                        </div>
                                        <div class="prcBreakup__rht">
                                            <p class="latoBold">₹ 0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prcBreakup__total">
                                <div class="makeFlex flexOne spaceBetween">
                                    <div class="prcBreakup__lft">
                                        <p class="latoBlack blackText">Total Amount to be paid</p>
                                    </div>
                                    <div class="prcBreakup__rht">
                                        <p class="latoBlack redText">₹ ${hotels[hotelId].price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`)