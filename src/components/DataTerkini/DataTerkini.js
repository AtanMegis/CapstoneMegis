import React from 'react';
import './DataTerkini.css';

const DataTerkini = () => {
	return (
		<div>
			<section className="data">
				<div className="container-data">
					<div className="row">
						<div className="title-data">
							<h3 aria-label="Heading Data">
								Presentasi Data Balita Kekurangan gizi
								provinsi Jakarta
							</h3>
							<p>
								Status gizi balita berdasarkan indeks
								BB/U, TB/U, dan BB/TB (%) pada tahun
								2018
							</p>
						</div>
					</div>
					<div className="data-card">
						<div className="card">
							<div className="avatar">
								<img
									src="https://cdn.pixabay.com/photo/2019/04/17/05/21/hijab-4133360__340.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									KEPULAUAN SERIBU
								</h4>
								<p className="description">
									BB/U: 1,8% <br /> TB/U: 12,8%{' '}
									<br /> BB/TB: 3,1%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://cdn.pixabay.com/photo/2019/06/19/06/53/cartoon-4284092__340.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA UTARA
								</h4>
								<p className="description">
									BB/U: 0,7% <br /> TB/U: 0,7% <br />{' '}
									BB/TB: 1%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://cdn.pixabay.com/photo/2019/06/19/05/13/hijab-4283954__340.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA TIMUR
								</h4>
								<p className="description">
									BB/U: 0,5% <br /> TB/U: 0,3% <br />{' '}
									BB/TB: 0,5%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://cdn.pixabay.com/photo/2018/02/16/01/50/robot-3156763__340.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA SELATAN
								</h4>
								<p className="description">
									BB/U: 0,2% <br /> TB/U: 0,1% <br />{' '}
									BB/TB: 0,2%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://cdn.pixabay.com/photo/2017/07/20/09/02/kite-2521627__340.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA PUSAT
								</h4>
								<p className="description">
									BB/U: 0,5% <br /> TB/U: 2,4% <br />{' '}
									BB/TB: 0,6%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://cdn.pixabay.com/photo/2020/03/12/09/23/hero-4924493__340.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA BARAT
								</h4>
								<p className="description">
									BB/U: 0,6% <br /> TB/U: 0,8% <br />{' '}
									BB/TB: 0,7%
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default DataTerkini;
