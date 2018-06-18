<?php /* Template Name: process */ ?>
<?php get_header(); ?>

<div id="visual">
		<picture> 
			<source media="(max-width: 480px)" srcset="<?php bloginfo('template_directory') ?>/inc/img/process/process_mobile.png" /> 
			<img src="<?php bloginfo('template_directory') ?>/inc/img/process/process.png" alt="一貫生産体制" width="100%" /> 
		</picture>
		<div class="visual-title-area">
			<h1>一貫生産体制</h1>
		</div>
	</div>
	<div id="contact">
		<div class="wrapper-size">
			<ol class="contact-path">
				<li>
					<a href="index">ホーム</a>
				</li>
				<li>生産・品質</li>
				<li>一貫生産体制</li>
			</ol>	

			<div class="step-block">
				<img src="<?php bloginfo('template_directory') ?>/inc/img/process/00.jpg" alt="3D CAD" />
				<div class="step-content">
					<h2 class="step-title">Step 1) 3D CAD</h2>
					<p>３Dデーターを頂きCAD（プロE）により設計・製作を行います。</p>
				</div>
			</div>
			
			<div class="step-line">
				<hr />
				<i class="fa fa-caret-down"></i>
			</div>

			<div class="step-block">
				<img src="<?php bloginfo('template_directory') ?>/inc/img/process/01.jpg" alt="試作" />
				<div class="step-content">
					<h2 class="step-title">Step 2) 試作</h2>
					<p>
						注形品または切削加工でのモック作成も可能です。<br>
						現在LED照明の開発に携わっています。<br>
						一次試作から量産性を考慮した取組みを行っています。
					</p>
				</div>
			</div>
			
			<div class="step-line">
				<hr />
				<i class="fa fa-caret-down"></i>
			</div>

			<div class="step-block">
				<img src="<?php bloginfo('template_directory') ?>/inc/img/process/02.jpg" alt="量産" />
				<div class="step-content">
					<h2 class="step-title">Step 3) 量産</h2>
					<p>最新の電動機による全自動成形を行います。</p>
				</div>
			</div>

			<div class="step-line">
				<hr />
				<i class="fa fa-caret-down"></i>
			</div>

			<div class="step-block">
				<img src="<?php bloginfo('template_directory') ?>/inc/img/process/03.jpg" alt="二次加工" />
				<div class="step-content">
					<h2 class="step-title">Step 4) 二次加工</h2>
					<p>塗装ラインです。３コート、ＵＶ塗装、エラストマーへの塗装も行います。</p>
				</div>
			</div>

			<div class="step-line">
				<hr />
				<i class="fa fa-caret-down"></i>
			</div>

			<div class="step-block">
				<img src="<?php bloginfo('template_directory') ?>/inc/img/process/04.jpg" alt="組立" />
				<div class="step-content">
					<h2 class="step-title">Step 5) 組立</h2>
					<p>仕上げ作業及び、組立です。治具等を使用して、正確な作業を行います。</p>
				</div>
			</div>

			<div class="step-line">
				<hr />
				<i class="fa fa-caret-down"></i>
			</div>

			<div class="step-block">
				<img src="<?php bloginfo('template_directory') ?>/inc/img/process/05.jpg" alt="完成・納" />
				<div class="step-content">
					<h2 class="step-title">Step 6) 完成・納品</h2>
				</div>
			</div>

		</div>
	</div>

<?php get_footer(); ?>
