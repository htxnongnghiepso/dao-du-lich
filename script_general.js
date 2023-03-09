(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    return i(g);
    function i(p, q) {
        switch (p) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['startsWith']('photo'))
                        x = this['getByClassName']('PhotoPlayList');
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var B = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (B) {
                            w = B[0x1];
                            switch ('quiz.' + B[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var C = this['get']('data')['quiz'];
                        if (C) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, G[I]['id'], s), this);
                                        }
                                    } else {
                                        C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    C['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var L = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            L += C['getObjective'](G[I]['id'], s);
                                        }
                                    } else {
                                        L = C['getObjective'](w, s);
                                    }
                                } else {
                                    L = C['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        L += 0x1;
                                }
                                return L;
                            } catch (M) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var N = this['get']('data');
        N['updateText'](N['translateObjs'][f]);
    }
    function k(O) {
        var P = O['data']['nextSelectedIndex'];
        if (P >= 0x0) {
            var Q = O['source']['get']('items')[P];
            var R = function () {
                Q['unbind']('begin', R, this);
                j['call'](this);
            };
            Q['bind']('begin', R, this);
        }
    }
    function l(S) {
        return function (T) {
            if (S in T) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(U, V) {
        return function (W, X) {
            if (U == W && V in X) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(Y, Z, a0) {
        for (var a1 = 0x0; a1 < Y['length']; ++a1) {
            var a2 = Y[a1];
            var a3 = a2['get']('selectedIndex');
            if (a3 >= 0x0) {
                var a4 = Z['split']('.');
                var a5 = a2['get']('items')[a3];
                if (a0 !== undefined && !a0['call'](this, a5))
                    continue;
                for (var a6 = 0x0; a6 < a4['length']; ++a6) {
                    if (a5 == undefined)
                        return '';
                    a5 = 'get' in a5 ? a5['get'](a4[a6]) : a5[a4[a6]];
                }
                return a5;
            }
        }
        return '';
    }
    function o(a7, a8) {
        var a9 = a8['get']('player');
        return a9 !== undefined && a9['get']('viewerArea') == a7;
    }
}
var script = {"scripts":{"getMediaByName":TDV.Tour.Script.getMediaByName,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPixels":TDV.Tour.Script.getPixels,"executeJS":TDV.Tour.Script.executeJS,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizFinish":TDV.Tour.Script.quizFinish,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"playAudioList":TDV.Tour.Script.playAudioList,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"init":TDV.Tour.Script.init,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setLocale":TDV.Tour.Script.setLocale,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"existsKey":TDV.Tour.Script.existsKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setValue":TDV.Tour.Script.setValue,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"translate":TDV.Tour.Script.translate,"downloadFile":TDV.Tour.Script.downloadFile,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMainViewer":TDV.Tour.Script.getMainViewer,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMapLocation":TDV.Tour.Script.setMapLocation,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"registerKey":TDV.Tour.Script.registerKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getOverlays":TDV.Tour.Script.getOverlays,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"clone":TDV.Tour.Script.clone,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"mixObject":TDV.Tour.Script.mixObject,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"isPanorama":TDV.Tour.Script.isPanorama,"showWindow":TDV.Tour.Script.showWindow,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getKey":TDV.Tour.Script.getKey,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"openLink":TDV.Tour.Script.openLink,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowScore":TDV.Tour.Script.quizShowScore,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizStart":TDV.Tour.Script.quizStart,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"createTween":TDV.Tour.Script.createTween,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent},"start":"this.init()","data":{"locales":{"en":"locale/en.txt"},"defaultLocale":"en","history":{},"name":"Player94466","textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"pitch":1}},"propagateClick":false,"id":"rootPlayer","scrollBarMargin":2,"layout":"absolute","minHeight":0,"class":"Player","minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","gap":10,"backgroundColor":["#FFFFFF"],"watermark":false,"hash": "a7864c38845ed9670d4b6896290bc7875538d32672069e9ff14142e7e62b2f23", "definitions": [{"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_F076A942_C3E0_0F75_41DF_F2BCE7E2EEB6","displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000},{"easing":"cubic_in_out","class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0,"targetPitch":-33.54,"duration":3000}],"displayOriginPosition":{"class":"RotationalCameraDisplayPosition","yaw":-29.57,"hfov":165,"pitch":-90,"stereographicFactor":1},"id":"panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":-29.57,"pitch":-33.54}},{"class":"PlayList","id":"mainPlayList","items":[{"player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338_camera","class":"PanoramaPlayListItem","media":"this.panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338"}]},{"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","mode":"quality","arrowKeysAction":"translate","touchControlMode":"drag_rotation","aaEnabled":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338_t.jpg","cube":{"levels":[{"class":"TiledImageResourceLevel","width":21504,"tags":"ondemand","rowCount":7,"height":3584,"url":"media/panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338_0/{face}/0/{row}_{column}.jpg","colCount":42},{"class":"TiledImageResourceLevel","width":12288,"tags":"ondemand","rowCount":4,"height":2048,"url":"media/panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338_0/{face}/1/{row}_{column}.jpg","colCount":24},{"class":"TiledImageResourceLevel","width":6144,"tags":"ondemand","rowCount":2,"height":1024,"url":"media/panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338_0/{face}/2/{row}_{column}.jpg","colCount":12},{"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"],"rowCount":1,"height":512,"url":"media/panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338_0/{face}/3/{row}_{column}.jpg","colCount":6},{"class":"TiledImageResourceLevel","width":9216,"tags":"mobilevr","rowCount":1,"height":1536,"url":"media/panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338_0/{face}/vr/0.jpg","colCount":6},{"class":"TiledImageResourceLevel","width":12288,"tags":"mobilevr2gen","rowCount":1,"height":2048,"url":"media/panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338_0/{face}/vr2gen/0.jpg","colCount":6}],"class":"ImageResource"}}],"class":"Panorama","label":trans('panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338.label'),"data":{"label":"dao"},"thumbnailUrl":"media/panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338_t.jpg","hfovMax":130,"hfov":360,"vfov":180,"id":"panorama_F5E657AF_C3E0_030A_41D7_67C51AE40338"},{"subtitlesTextShadowColor":"#000000","id":"MainViewer","subtitlesTextShadowHorizontalLength":1,"subtitlesTop":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"propagateClick":false,"data":{"name":"Main Viewer"},"progressBarBorderColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","subtitlesFontSize":"3vmin","progressBarBorderRadius":2,"minHeight":50,"progressBorderRadius":2,"minWidth":100,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingBottom":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"firstTransitionDuration":0,"vrPointerSelectionColor":"#FF6600","progressBarBackgroundColorRatios":[0],"progressBackgroundColor":["#000000"],"subtitlesFontFamily":"Arial","toolTipShadowColor":"#333138","playbackBarHeadShadowBlurRadius":3,"progressLeft":"33%","playbackBarHeadShadowOpacity":0.7,"toolTipTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"progressRight":"33%","progressBarBorderSize":0,"playbackBarBottom":5,"vrPointerSelectionTime":2000,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarLeft":0,"playbackBarBackgroundColor":["#FFFFFF"],"width":"100%","playbackBarHeadHeight":15,"height":"100%","subtitlesTextShadowOpacity":1,"playbackBarHeight":10,"playbackBarHeadShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontColor":"#606060","toolTipPaddingTop":4,"progressOpacity":0.7,"class":"ViewerArea","progressBorderColor":"#000000","playbackBarHeadWidth":6,"playbackBarHeadBorderSize":0,"playbackBarProgressBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"horizontal","subtitlesBottom":50,"subtitlesTextShadowVerticalLength":1,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"vrPointerColor":"#FFFFFF","playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","progressBottom":10,"toolTipPaddingRight":6,"progressHeight":2,"playbackBarHeadBorderRadius":0,"playbackBarRight":0,"playbackBarHeadBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"progressBorderSize":0,"playbackBarBorderSize":0,"toolTipPaddingLeft":6},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_F076A942_C3E0_0F75_41DF_F2BCE7E2EEB6"}],"width":"100%","children":["this.MainViewer"],"height":"100%","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var aa = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return aa;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.21.js.map
})();
//Generated with v2022.2.21, Wed Mar 8 2023