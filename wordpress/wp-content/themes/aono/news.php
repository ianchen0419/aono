<?php /* Template Name: news */ ?>
<?php get_header(); ?>


<div id="contact">
		<div class="wrapper-size">
			<ol class="contact-path">
				<li>
					<a href="index">ホーム</a>
				</li>
				<li>お知らせ一覧</li>
			</ol>

			<h1 class="block-title">お知らせ一覧</h1>

			<?php
				$args = array(
				'posts_per_page' => -1 // 表示件数の指定
				);
				$posts = get_posts( $args );
				foreach ( $posts as $post ): // ループの開始
				setup_postdata( $post ); // 記事データの取得
			?>

			<div class="news-item">
				<div class="date"><?php the_time('Y.m.d') ?></div>
				<div class="news-title">
					<a href="
					<?php echo get_the_content() ? the_permalink(): "javascript:;"; ?>
					">
						<?php the_title(); ?>
					</a>
				</div>
			</div>

			<?php
				endforeach; // ループの終了
				wp_reset_postdata(); // 直前のクエリを復元する
			?>	

		</div>
	</div>

<?php get_footer(); ?>
