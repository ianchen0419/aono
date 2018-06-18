<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.osdn.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'aono');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'aono');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'aono');

/** MySQL のホスト名 */
define('DB_HOST', 'localhost');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8mb4');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '3`(>yQ-7=^j{-y=To GJ:*Fa}s80dqU&4DxnWtRro4qVHYbM0QJ,ekG{4 I&f%fQ');
define('SECURE_AUTH_KEY',  '5Z|Y|#@h+v_`ZqX~}<]C%yyldxjDIjJ+JeRdaH(@}87QgpKZEAl]Q2vS;1=q*;;+');
define('LOGGED_IN_KEY',    'xJZg;o2{~qiQ|L/F: &oq*Ll1U!70PaBO t#gL=a =_WGgk>M.z.K9w7[|<&Anv}');
define('NONCE_KEY',        'P{D!2BCvD^sJ%1L? 6aSmE$3c(j)t?V(ly|qXU3Yd37bw^v)9$:}$;pQM^D%}]9`');
define('AUTH_SALT',        ' e6]5$,u58H2.+&$R!=:Z.3L]Ai[b@@4tNK{1DAGfor0qA8<,FyuLO|/%iBVrc`L');
define('SECURE_AUTH_SALT', '^4D;dz|,I3ktil^{`U0N=Gcmt~^B5SJ/rOBfo@+H&;`@Rw[g:kYj!vb-c)1zM3?F');
define('LOGGED_IN_SALT',   '8;(d4(rK)[]ucEZbT[`Vb -^=_ayRAh-8RB?YTG(J`tmf*K;74<+m<ADL/)<Mno!');
define('NONCE_SALT',       'ds4nH;N Yj8-m2^#k[tXy8PaP^9^:1qm|!%Q<!y^FbVfd9K!,J01{sp:`4$q%V0_');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

