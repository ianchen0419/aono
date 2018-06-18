<?php ?>
<?php get_header(); ?>

<div id="visual">
		<div class="slider-area">
			<div id="sliderWrapper">
				<div class="slider-item">
					<div class="slider-image image-3"></div>
					<div class="slider-text">あなたの課題に、深く寄り添う。<br/>そして一歩前へ。</div>
				</div>
				<div class="slider-item">
					<div class="slider-image image-1"></div>
					<div class="slider-text">お困りのことありますよね？<br/>"ある"という方は、弊社ウェブサイトをご覧ください。</div>
				</div>
				<div class="slider-item">
					<div class="slider-image image-2"></div>
					<div class="slider-text">向き合って、明日をつくる青野の技術</div>
				</div>
				<div class="slider-item">
					<div class="slider-image image-3"></div>
					<div class="slider-text">あなたの課題に、深く寄り添う。<br/>そして一歩前へ。</div>
				</div>
				<div class="slider-item">
					<div class="slider-image image-1"></div>
					<div class="slider-text">お困りのことありますよね？<br/>"ある"という方は、弊社ウェブサイトをご覧ください。</div>
				</div>
			</div>
			<div class="slider-buttons">
				<button id="prev">
					<i class="fa fa-chevron-left"></i>
				</button>
				<div class="dots">
					<button class="dot active" id="left"></button>
					<button class="dot" id="center"></button>
					<button class="dot" id="right"></button>
				</div>
				<button id="next">
					<i class="fa fa-chevron-right"></i>
				</button>
			</div>
		</div>
	</div>
<div id="contact">
	<div class="wrapper-size">
		<div class="advantage-area">
			<h1 class="title-1">特色</h1>
			<article class="center-article">射出成形・プラスチック成形・金型・プラスチック塗装・成形不良対策の事まで、一貫生産体制を構築しています。<br>成形に関するさまざまなお悩み・ご希望にスピーディーにお応えします。</article>
			<div class="advantage-image-wrapper">
				<a href="advantage1.html">
					<div class="advantage-image-item">
						<img src="<?php bloginfo('template_directory') ?>/inc/img/top/top_advantage1.png" alt="移管型（移管金型）の成形にも対応"/>
						<span>移管型（移管金型）の成形にも対応</span>
					</div>
				</a>
				<a href="advantage2.html">
					<div class="advantage-image-item">
						<img src="<?php bloginfo('template_directory') ?>/inc/img/top/top_advantage2.png" alt="金型、安価材料の提案によるコスト削減勉強会の開催"/>
						<span>コスト削減 / 勉強会の開催</span>
					</div>
				</a>
			</div>
		</div>
		<div class="gallery-area">
			<h1 class="title-1">製品ギャラリー</h1>
			<article class="center-article">これまで培ってきた技術を元に、IoT機器やスマートフォン、各種電池など新しい分野への挑戦を続けています。</article>
			<div class="gallery-image-wrapper">
				<a href="product/#communication">
					<div class="gallery-image-item">
						<img src="<?php bloginfo('template_directory') ?>/inc/img/top/top_1.png" alt="通信機器_中継機器" />
						<p>通信機器<br/>（IoT、スマートフォン）</p>
					</div>
				</a>
				<a href="product/#battery">
					<div class="gallery-image-item">
						<img src="<?php bloginfo('template_directory') ?>/inc/img/top/top_2.png" alt="蓄電池" />
						<p class="mar_top25">蓄電池</p>
					</div>
				</a>
				<a href="product/#automobile">
					<div class="gallery-image-item">
						<img src="<?php bloginfo('template_directory') ?>/inc/img/top/top_3.png" alt="自動車関連" />
						<p class="mar_top25">自動車関連</p>
					</div>
				</a>
			</div>
		</div>
		<div class="news-area">
			<h2 class="title-2">
				<span>お知らせ</span>
			</h2>
			
			<?php while ( have_posts() ) : the_post();  ?>

			<div class="news-item">
				<div class="date"><?php the_time('Y.m.d') ?></div>
				<div class="news-title">
					<a href="
					<?php echo get_the_content() ? the_permalink(): "javascript:;"; ?>
					">
						<?php echo mb_strimwidth(get_the_title(), 0, 30, '...'); ?>
					</a>
				</div>
			</div>

			<?php endwhile; ?>

			<div class="right-text">
				<i class="fa fa-caret-right"></i>
				<a href="news.html">お知らせ一覧</a>
			</div>
		</div>
	</div>
	</div>
<?php get_footer(); ?>
