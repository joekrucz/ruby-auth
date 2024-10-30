import Rails from '@rails/ujs';
import * as ActiveStorage from '@rails/activestorage';
import 'channels';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
Rails.start();
ActiveStorage.start();


