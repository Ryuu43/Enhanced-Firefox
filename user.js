//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 128                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.jsbc_compression_level", 3);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("dom.security.sanitizer.enabled", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 120000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-FIRST POLICY ***/
user_pref("dom.security.https_first", true);
user_pref("dom.security.https_first_schemeless", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("security.mixed_content.block_display_content", true);
user_pref("pdfjs.enableScripting", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** WEBRTC ***/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** DETECTION ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("dom.private-attribution.submission.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** COOKIE BANNER HANDLING ***/
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:
user_pref("browser.tabs.tabMinWidth", 0);
user_pref("browser.tabs.tabClipWidth", 999);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("image.mem.surfacecache.max_size_kb", 500000); // <500MB, default=2GB. A cache for decoded images (based on the name and other related settings which can be found on https://searchfox.org)
user_pref("browser.sessionstore.interval", 1000000); // (in milliseconds) default=15000=15sec, 300000=5min, 1000000=16min
user_pref("browser.sessionhistory.max_total_viewers", 0);
user_pref("network.buffer.cache.size", 262144); // in bytes. 262144=256KB (You can also try 524288 [=512KB] to see if it works even better) / "the stream buffer segment size used for most network activity." (http://forums.mozillazine.org/viewtopic.php?f=7&t=2416193) / "the default setting is 32 kB, and that corresponds with the buffer size of very old TCP/IP stacks." (https://www.mail-archive.com/support-seamonkey@lists.mozilla.org/msg74561.html) (note "buffer.cache"="segment" https://bugzilla.mozilla.org/show_bug.cgi?id=715770#c1)
user_pref("network.buffer.cache.count", 128); // https://www.mail-archive.com/support-seamonkey@lists.mozilla.org/msg74561.html
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-connections-per-server", 32); // This setting might not be used anymore - there's no result for it in https://searchfox.com (the last default might have been 15 as per https://kb.mozillazine.org/Network.http.max-connections-per-server)
user_pref("network.http.max-persistent-connections-per-server", 12); // default=6
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 6); // default=3. "Number of connections that we can open beyond the standard parallelism limit defined by max-persistent-connections-per-server/-proxy to handle urgent-start marked requests"
user_pref("network.http.pacing.requests.burst", 16); // default=10. Controls how many HTTP requests are sent at once
user_pref("network.http.pacing.requests.min-parallelism", 8); // default=6. "Min-Parallelism is the amount of active connections that have to be in use in order for the rate limiter to be used" (https://bugzilla.mozilla.org/show_bug.cgi?id=819734#c1)
user_pref("network.websocket.max-connections", 256); // You can also try 400. default=200. "WebSockets is an advanced technology that makes it possible to open an interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply." (https://devdoc.net/web/developer.mozilla.org/en-US/docs/WebSockets.html / https://portswigger.net/web-security/websockets/what-are-websockets)
user_pref("network.ssl_tokens_cache_capacity", 32768);
user_pref("browser.link.open_newwindow.restriction", 0); // 0 = apply the setting under "browser.link.open_newwindow" to ALL new windows (even script windows with features)
user_pref("browser.link.open_newwindow.override.external", 3); // 3 = open external links (from outside Firefox) in a new tab
user_pref("browser.tabs.insertAfterCurrent", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.urlbar.openintab", true);
user_pref("ui.prefersReducedMotion", 1);
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("full-screen-api.transition.timeout", 0);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("pageThumbs.enabled", false);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("media.block-play-until-visible", true);
user_pref("image.mem.decode_bytes_at_a_time", 65536); // The speed of processing images
user_pref("image.http.accept", "*/*"); // remove webp as the default image format. Default = "image/webp,*/*"
user_pref("layout.word_select.eat_space_to_next_word", false); // Don't select the space next to a word when selecting a word
user_pref("browser.backspace_action", 0); // restore/enable backspace to return to previous page
user_pref("browser.translations.enable", false); // disable "translate this page" that appears when foreign language is detected
user_pref("browser.warnOnQuit", true);
user_pref("browser.tabs.warnOnClose", false); // ask for confirmation when closing a window with multiple tabs
user_pref("browser.tabs.closeWindowWithLastTab", false); // don't close the window when closing the last tab
user_pref("browser.urlbar.openViewOnFocus", false); // Disable address bar popping out
user_pref("browser.dataFeatureRecommendations.enabled", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", );
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 0);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 0);
user_pref("pdfjs.forcePageColors", true);
user_pref("pdfjs.pageColorsBackground", #202020);
user_pref("pdfjs.pageColorsForeground", #d1d1d1);
user_pref("mousewheel.default.delta_multiplier_y", 150);
user_pref("network.http.rcwn.enabled", false);
user_pref("ui.key.menuAccessKeyFocuses", false);
user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);
user_pref("media.hardwaremediakeys.enabled", false);
user_pref("gfx.color_management.mode", 1);
user_pref("browser.urlbar.suggest.*", false);
user_pref("security.dialog_enable_delay", 0);
user_pref("dom.animations.offscreen-throttling", false);
user_pref("extensions.screenshots.disabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.always-show", false);
user_pref("narrate.enabled", false);
user_pref("reader.parse-on-load.enabled", false);
user_pref("findbar.modalHighlight", true);


/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:
user_pref("general.smoothScroll.currentVelocityWeighting", 0);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 150);
user_pref("general.smoothScroll.stopDecelerationWeighting", 0.82);
user_pref("mousewheel.min_line_scroll_amount", 25);


/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
