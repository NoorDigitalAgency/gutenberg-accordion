<?php

/**
 * Settings page to provide Google map API key for google-map block
 */

if ( ! function_exists( 'noor_map_settings_page' ) ) {

  function noor_map_settings_page () {

    $key = get_option('map_settings'); 
    
    $value = isset( $key['map_secret_key'] ) && ! empty( $key['map_secret_key'] ) ? $key['map_secret_key'] : ''; ?>
  
    <div class="wrap">

    <h2><?php _e( '', 'noorblocks' ); ?></h2>

    <form method="post" action="options.php">

      <?php settings_fields( 'google_map_settings_group' ); ?> 
          
      <h3 class="title"><?php _e( 'Google Maps API Key', 'noorblocks' ); ?></h3>

      <table class="form-table">
        <tbody>
          <tr valign="top"> 
            <th scope="row" valign="top">
              <?php _e( 'Google Map Key', 'noorblocks' ); ?>
            </th>
            <td>
              <input id="map_settings[map_secret_key]" name="map_settings[map_secret_key]" type="text" class="regular-text" value="<?php echo $value ?>"/>
              <label class="description" for="map_settings[map_secret_key]"><?php _e( 'Paste your key here.', 'noorblocks' ); ?></label>
            </td>
          </tr>
        </tbody>
      </table>  
              
      <p class="submit">
        <input type="submit" class="button-primary" value="<?php _e( 'Save Options', 'noorblocks' ); ?>" />
      </p>
    </form>

    </div>
  <?php 
  }
}

add_action( 'admin_init', function () {

  register_setting('google_map_settings_group', 'map_settings');
}, 10);

add_action( 'admin_menu', function () {

  add_options_page(
    __('Google Map Settings', 'noorblocks'),
    __('Google Map Settings', 'noorblocks'),
    'manage_options',
    'google-map-key',
    'noor_map_settings_page'
  );
}, 10);