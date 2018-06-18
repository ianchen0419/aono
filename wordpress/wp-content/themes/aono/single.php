<?php /* Template Name: index */ ?>
<?php get_header(); ?>

<div id="contact">
		<div class="wrapper-size">
		<?php while ( have_posts() ) : the_post(); ?>
			<ol class="contact-path">
				<li>
					<a href="index">ホーム</a>
				</li>
				<li>
					<a href="news.html">お知らせ</a>
				</li>
				<li><?php the_title(); ?></li>
			</ol>
			
			<div class="single-news-title-area">
				<h1 class="single-news-title"><?php the_title(); ?></h1>
			</div>
			<div class="single-news-date">
				<i class="fa fa-calendar"></i>
				<?php the_time('Y.m.d') ?>
			</div>

			<div class="single-news-content-area">
				<?php the_content(); ?>
			</div>

		<?php endwhile; ?>
		</div>
	</div>

<?php get_footer(); ?>
