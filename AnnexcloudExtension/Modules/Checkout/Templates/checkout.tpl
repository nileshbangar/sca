{{#if copounList}}
<span class="order-wizard-cart-summary-tax" style="float:left">Claim Reward </span>
<span class="order-wizard-cart-summary-shipping-promocode">
	<div id="ac-reward" name="ac-reward" class="cart-summary-subtotal" />
		<select id="acclaim"  data-action="loyaltyclaimreward" class="order-wizard-paymentmethod-selector-module-options" style="min-width:170px;">
		<option value="">--Select--</option>
		{{#each copounList}}
			<option value="{{reward_id}}" {{#if selected}}selected="selected"{{/if}}>{{reward_name}}</option>
		{{/each}}
		</select>
	</div>
</span>
{{/if}}