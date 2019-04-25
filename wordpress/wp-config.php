<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'formaturismo' );

/** MySQL database username */
define( 'DB_USER', 'admin' );

/** MySQL database password */
define( 'DB_PASSWORD', 'P@ssw0rd' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!-yBqr]|VSa<BL:+zn}ix:4#4K.m|2Q>JvN%:kM?5qDq>%(.SHCw=(u%$$# 2.z^' );
define( 'SECURE_AUTH_KEY',  ':R/ $G/!!h}8_$w VRALbScT.krBmfn!?}x;S6ilqnz3>bJP1=:M#B@67c}X-*}l' );
define( 'LOGGED_IN_KEY',    'Pq63AYm+`?YLox#7<x2Xq?^}W!K;W8B*X:suQsT6r1Dix{:0*{rWq9[C.&G9?nd+' );
define( 'NONCE_KEY',        'XVKA 8^dE;~v^GM1Zdl^CD#an,DPJ[yQMOJ)D6yRMLi +|e|cBBd/ktZ$N2-#6d,' );
define( 'AUTH_SALT',        'D7XofRA. F4v1RKM~MW|~swuT)RNxr=E.p>Go=~ncF@.Rui6}6z^Yp8V]<|5ByB1' );
define( 'SECURE_AUTH_SALT', 'r@ml?j1)mR5N/?0mN,TX4BKDL8o3FP1ydFUVwpA.NN}pfkL_HhC7UOJCEL1KeUh2' );
define( 'LOGGED_IN_SALT',   'V.1Y40,gQ gWO,UarrGUGc,3)0)Gwa5f$=wS[ivZ>.ZoZWX`C^Z9uq{;w}=j[8xa' );
define( 'NONCE_SALT',       '!{)c~?EbLZG:(DL)G[JUSEEQErVrH>d4<.@|2P%Fs^yCT0;ABj!.NtVEL)+|L5J}' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
