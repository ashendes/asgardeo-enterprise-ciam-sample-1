/**
 * Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';

const RoundedIconButton = (props) => {
  const { icon, text, handleLogin } = props;
  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-between border bg-white border-primary text-primary hover:shadow hover:shadow-secondary hover:border-secondary hover:bg-secondary hover:text-white rounded-lg drop-shadow px-4 py-2">
      {icon && icon}
      {text && <div className="ml-2">{text}</div>}
    </button>
  );
};

export default RoundedIconButton;
