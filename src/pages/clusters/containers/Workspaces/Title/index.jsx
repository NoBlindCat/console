/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Icon } from '@pitrix/lego-ui'

import styles from './index.scss'

export default class Title extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
  }

  render() {
    const { className, icon, title, desc } = this.props

    return (
      <div className={classnames(styles.wrapper, className)}>
        <Icon name={icon} size={60} />
        <div className={styles.text}>
          <div className="h2">{title}</div>
          <p>{desc}</p>
        </div>
      </div>
    )
  }
}
