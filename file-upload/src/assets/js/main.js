$('document').ready(function () {
    if ($(".st-form-group__select2").length) {
        $(".st-form-group__select2").select2({
            placeholder: "State"
        });
    }
    if ($(".datepicker").length) {

        $(function () {
            $('.datepicker').datepicker().on('changeDate', function (ev) {
                $(this).datepicker('hide');
            });
        });
    }
    if ($("#month-calendar").length) {

        $('#month-calendar').fullCalendar({
            contentHeight: 'auto',
            defaultDate: '2019-02-12',
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [{
                title: 'Australia',
                start: '2019-02-23',
                end: '2019-02-28',
                color: '#e1f1e8'
            }]
        });

    }
    if ($("#calendar").length) {

        function editEvent(event) {
            $('#event-modal input[name="event-index"]').val(event ? event.id : '');
            $('#event-modal input[name="event-name"]').val(event ? event.name : '');
            $('#event-modal input[name="event-location"]').val(event ? event.location : '');
            $('#event-modal input[name="event-start-date"]').datepicker('update', event ? event.startDate : '');
            $('#event-modal input[name="event-end-date"]').datepicker('update', event ? event.endDate : '');
            $('#event-modal').modal();
        }

        function deleteEvent(event) {
            var dataSource = $('#calendar').data('calendar').getDataSource();

            for (var i in dataSource) {
                if (dataSource[i].id == event.id) {
                    dataSource.splice(i, 1);
                    break;
                }
            }

            $('#calendar').data('calendar').setDataSource(dataSource);
        }

        function saveEvent() {
            var event = {
                id: $('#event-modal input[name="event-index"]').val(),
                name: $('#event-modal input[name="event-name"]').val(),
                location: $('#event-modal input[name="event-location"]').val(),
                startDate: $('#event-modal input[name="event-start-date"]').datepicker('getDate'),
                endDate: $('#event-modal input[name="event-end-date"]').datepicker('getDate')
            }

            var dataSource = $('#calendar').data('calendar').getDataSource();

            if (event.id) {
                debugger;
                for (var i in dataSource) {
                    if (dataSource[i].id == event.id) {
                        dataSource[i].name = event.name;
                        dataSource[i].location = event.location;
                        dataSource[i].startDate = event.startDate;
                        dataSource[i].endDate = event.endDate;
                    }
                }
            } else {
                var newId = 0;
                for (var i in dataSource) {
                    if (dataSource[i].id > newId) {
                        newId = dataSource[i].id;
                    }
                }

                newId++;
                event.id = newId;

                dataSource.push(event);
            }

            $('#calendar').data('calendar').setDataSource(dataSource);
            $('#event-modal').modal('hide');
        }


        var currentYear = new Date().getFullYear();

        $('#calendar').calendar({
            style: 'background',
            enableContextMenu: true,
            enableRangeSelection: true,
            contextMenuItems: [{
                    text: 'Update',
                    click: editEvent
                },
                {
                    text: 'Delete',
                    click: deleteEvent
                }
            ],
            selectRange: function (e) {
                editEvent({
                    startDate: e.startDate,
                    endDate: e.endDate
                });

            },
            clickDay: function (e) {
                if (e.events.length > 0) {
                    debugger;
                    var content = '';

                    for (var i in e.events) {
                        debugger;
                        content += '<div class="event-tooltip-content">' +
                            '<div class="event-name" style="color:' + e.events[i].color +
                            '">' +
                            e.events[i].name + '</div>' +
                            '<div class="event-location">' + e.events[i].location +
                            '</div>' +
                            '</div>';

                        if (e.events[i].id == 2) {
                            $('#modal1').modal();


                        } else if (e.events[i].id == 3) {
                            $('#modal2').modal();
                        } else if (e.events[i].id == 4) {
                            $('#modal3').modal();
                        } else if (e.events[i].id == 0) {
                            $('#modal4').modal();
                        }
                    }

                    // $(e.element).popover({
                    //     trigger: 'manual',
                    //     container: 'body',
                    //     html: true,
                    //     content: content
                    // });


                    //$(e.element).popover('show');
                } else {
                    $('.addTravelModal').modal();
                }


            },
            mouseOutDay: function (e) {
                if (e.events.length > 0) {
                    $(e.element).popover('hide');
                }
            },
            dayContextMenu: function (e) {
                $(e.element).popover('hide');
            },
            dataSource: [{
                    id: 0,
                    name: 'Google I/O',
                    location: 'San Francisco, CA',
                    startDate: new Date(currentYear, 0, 7),
                    endDate: new Date(currentYear, 0, 11),
                    color: '#efefef'
                },
                {
                    id: 1,
                    name: 'Microsoft Convergence',
                    location: 'New Orleans, LA',
                    startDate: new Date(currentYear, 1, 23),
                    endDate: new Date(currentYear, 1, 28),
                    color: '#efefef'
                },
                {
                    id: 2,
                    name: 'Microsoft Convergence',
                    location: 'New Orleans, LA',
                    startDate: new Date(currentYear, 1, 23),
                    endDate: new Date(currentYear, 1, 28),
                    color: '#efefef'
                },
                {
                    id: 3,
                    name: 'Microsoft Convergence',
                    location: 'New Orleans, LA',
                    startDate: new Date(currentYear, 2, 14),
                    endDate: new Date(currentYear, 2, 17),
                    color: '#ffe8e8'
                },
                {
                    id: 4,
                    name: 'Microsoft Convergence',
                    location: 'New Orleans, LA',
                    startDate: new Date(currentYear, 4, 13),
                    endDate: new Date(currentYear, 4, 17),
                    color: '#ffe8e8'
                }
            ]
        });

        $('#save-event').click(function () {
            saveEvent();
        });
    }

});
$(document).ready(function () {

	// if ($("#menu8").length) {
	// 	var previous = document.getElementById("menu8");
	// 	var original = "menu";
	// 	var toOpen = "";
	// 	var over;

	// 	var delay = function (elem, callback) {
	// 		var timeout = null;
	// 		timeout = setTimeout(function () {
	// 			if (over) {
	// 				callback(elem);
	// 			}
	// 		}, 0);

	// 		$(elem).mouseout(function () {
	// 			over = false;
	// 			clearTimeout(timeout);
	// 		});
	// 	};

	// 	$(".over").mouseenter(function (event) {
	// 		debugger;
	// 		$(this);
	// 		over = true;
	// 		delay(document.getElementById(event.target.id), function (context) {
	// 			toOpen = document.getElementById(original.concat(context.id));
	// 			openMenu(toOpen);
	// 			previous = toOpen;
	// 		});
	// 	});

	// 	$(".clicky").click(function () {
	// 		openMenu(document.getElementById("menu8"));
	// 		previous = document.getElementById("menu8");
	// 	});

	// 	function openMenu(context) {
	// 		closeMenu(previous);
	// 		$(context).toggleClass("visible");
	// 		$(context).toggleClass("hidden");
	// 	}

	// 	function closeMenu(context) {
	// 		$(context).toggleClass("visible");
	// 		$(context).toggleClass("hidden");
	// 	}

	// }
	if ($("#menu8").length > 0) {		
		$(".over").mouseenter(function (event) {
				var eleID =	$(this).attr('id');
				toOpen = "menu".concat(eleID);
				openMenu(toOpen);					
		});		
	}

		function openMenu(toOpen) {			
			$("#menu8").html($("#"+toOpen).text()).removeClass('hidden');
			if($("#menu8").html() == "" )
			{
				$("#menu8").html($("#menuDefault").text()).removeClass('hidden');
			}
		}
});
$('document').ready(function () {
    if ($(".st-form-group__select2").length) {
        $(".st-form-group__select2").select2({
            placeholder: "State"
        });
    }
    if ($(".js-gender").length) {
        $(".js-gender").select2({
            placeholder: "Gender"
        });
    }
    if ($(".js-citizenship").length) {
        $(".js-citizenship").select2({
            placeholder: "Citizenship"
        });

    }
    if ($(".js-country").length) {
        $(".js-country").select2({
            placeholder: "Country"
        });

    }


    $(function () {
        if ($(".datepicker").length) {
            $('.datepicker').datepicker().on('changeDate', function (ev) {
                $(this).datepicker('hide');
            });
        }
    });
});
$(document).ready(function () {
    $(".circle-consent").css("display", "none");
    $(".menuname").click(function (e) {
        debugger;
        e.stopPropagation();
        $(".default").css("display", "block");
        $(".circle-consent").css("display", "none");
        $(".circle-profile").css("display", "none");
        $(".circle-travel").css("display", "none");
        $(".circle-calender").css("display", "none");
        $(".circle-document").css("display", "none");
        $(".circle-help").css("display", "none");
    });

    $(".circle-menu1").click(function (e) {
        debugger;
        e.stopPropagation();
        $(".default").css("display", "none");
        $(".circle-consent").css("display", "block");
    });

    $(".circle-menu2").click(function (e) {
        debugger;
        e.stopPropagation();
        $(".default").css("display", "none");
        $(".circle-consent").css("display", "none");
        $(".circle-profile").css("display", "block");
    });

    $(".circle-menu3").click(function (e) {
        debugger;
        e.stopPropagation();
        $(".default").css("display", "none");
        $(".circle-travel").css("display", "block");
    });

    $(".circle-menu4").click(function (e) {
        debugger;
        e.stopPropagation();
        $(".default").css("display", "none");
        $(".circle-calender").css("display", "block");
    });

    $(".circle-menu5").click(function (e) {
        debugger;
        e.stopPropagation();
        $(".default").css("display", "none");
        $(".circle-document").css("display", "block");
    });

    $(".circle-menu6").click(function (e) {
        debugger;
        e.stopPropagation();
        $(".default").css("display", "none");
        $(".circle-help").css("display", "block");
    });

});
// $('document').ready(function () {
//     $(".st-form-group__select2").select2({
//         placeholder: "Select a state"
//     });
//     $(".js-gender").select2({
//         placeholder: "Select Gender"
//     });
//     $(".js-citizenship").select2({
//         placeholder: "Select Citizenship"
//     });

//     $(function () {
//         $('.datepicker').datepicker().on('changeDate', function (ev) {
//             $(this).datepicker('hide');
//         });
//     });
// });
$('document').ready(function () {

    // $(".st-form-group__select2").select2({
    //     placeholder: "Select a state"
    // });
    if ($(".js-city").length) {
        $(".js-city").select2({
            placeholder: "City"
        });
    }
    if ($(".js-state").length) {
        $(".js-state").select2({
            placeholder: "State"
        });
    }

    // $(function () {
    //     $('.datepicker').datepicker().on('changeDate', function (ev) {
    //         $(this).datepicker('hide');
    //     });
    // });

    $(document).ready(function () {

        if ($(".stepper").length) {

            function triggerClick(elem) {
                $(elem).click();
            }
            var $progressWizard = $('.stepper'),
                $tab_active,
                $tab_prev,
                $tab_next,
                $btn_prev = $progressWizard.find('.prev-step'),
                $btn_next = $progressWizard.find('.next-step'),
                $tab_toggle = $progressWizard.find('[data-toggle="tab"]'),
                $tooltips = $progressWizard.find('[data-toggle="tab"][title]');

            // To do:
            // Disable User select drop-down after first step.
            // Add support for payment type switching.

            //Initialize tooltips
            $tooltips.tooltip();

            //Wizard
            $tab_toggle.on('show.bs.tab', function (e) {
                var $target = $(e.target);

                if (!$target.parent().hasClass('active, disabled')) {
                    $target.parent().prev().addClass('completed');
                    $(".st-stepper-nav").addClass('st-active');

                }
                if ($target.parent().hasClass('disabled')) {
                    return false;
                }
            });

            // $tab_toggle.on('click', function(event) {
            //     event.preventDefault();
            //     event.stopPropagation();
            //     return false;
            // });

            $btn_next.on('click', function () {
                debugger;
                $('html, body').animate({
                    scrollTop: 0
                }, '500');
                $tab_active = $progressWizard.find('.active');
                $tab_active.next().removeClass('disabled');
                $tab_active.removeClass('active');
                $tab_active.next().addClass('active');

                $tab_next = $tab_active.next().find('a[data-toggle="tab"]');
                triggerClick($tab_next);

                if ($(".st-stepper-nav").hasClass('st-active')) {
                    $(".travel-evaluation-title").addClass("travel-active");
                }




            });
            $btn_prev.click(function () {
                $('html, body').animate({
                    scrollTop: 0
                }, '500');
                $tab_active = $progressWizard.find('.active');
                $tab_prev = $tab_active.prev().find('a[data-toggle="tab"]');  
                $tab_active.removeClass('active');
                $tab_active.prev().removeClass('completed').addClass('active');             
                triggerClick($tab_prev);
                
            });

        }
    });
    if ($(".panel").length) {
        (function () {


            $(".panel").on("show.bs.collapse hide.bs.collapse", function (e) {
                if (e.type == 'show') {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });

        }).call(this);

        $('.panel-title').click(function () {
            debugger;
            var checked = $(this).closest('.panel').find('input').prop('checked');

            if (checked) {
                $(this).closest('.panel').find('input').prop('checked', false);
            } else {
                $(this).closest('.panel').find('input').prop('checked', true);
            }

        });
    }





});
$(document).ready(function () {
    if ($(".js-menu-link").length) {
        $.fn.clickOff = function (callback, selfDestroy) {
            var clicked = false;
            var parent = this;
            var destroy = selfDestroy || true;

            parent.click(function () {
                clicked = true;
            });

            $(document).click(function (event) {
                if (!clicked) {
                    callback(parent, event);
                }
                if (destroy) {
                    //parent.clickOff = function() {};
                    //parent.off("click");
                    //$(document).off("click");
                    //parent.off("clickOff");
                };
                clicked = false;
            });
        };

        $(".js-menu-link").click(function () {
            $(".st-header__menu-container").removeClass("d-none");
        });

        $(".js-menu-link").clickOff(function () {

            $(".st-header__menu-container").addClass("d-none");
        });

    }

});